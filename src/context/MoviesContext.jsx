import {createContext, useCallback, useContext, useEffect, useState} from 'react';
import {useSearch} from "./SearchContext.jsx";
import {throttle} from "../utils/functions.js";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// Simple cache for selected movies
let movieCache = {};
let lastSearchQuery = '';
let lastSearchType = '';
let lastSearchYearRange = [];

const MoviesContext = createContext(null);

export function useMovies() {
    return useContext(MoviesContext);
}

export function MoviesProvider({children}) {
    const {searchQuery, selectedSearchType, searchYearRange} = useSearch();

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [numResults, setNumResults] = useState(0);
    const [responseMessage, setResponseMessage] = useState('Use the search above to find a movie.');

    const [listLoading, setListLoading] = useState(false);
    const [movieLoading, setMovieLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch movies from the API
    const fetchMovies = async function (searchQuery, selectedSearchType, searchYearRange, page = 1) {
        // Remove trailing spaces and special characters then encode it
        let filteredQuery = searchQuery.trim().replace(/[^a-zA-Z0-9: ]/g, '').toLowerCase();
        filteredQuery = encodeURIComponent(filteredQuery);

        if (!filteredQuery) return;

        setListLoading(true);

        let isNewSearch = false;

        // Reset the movies list if the search params have changed
        if (lastSearchQuery !== searchQuery || lastSearchType !== selectedSearchType || lastSearchYearRange !== searchYearRange) {
            isNewSearch = true;

            page = 1;
            setCurrentPage(1);
            setMovies([]);
            lastSearchQuery = searchQuery;
            lastSearchType = selectedSearchType;
            lastSearchYearRange = searchYearRange;
        }

        let url = `${BASE_URL}&s=${filteredQuery}&page=${page}`;
        if (selectedSearchType) {
            url += `&type=${selectedSearchType}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Search) {
                // If year range is set, filter movies by year
                if (searchYearRange.length > 0) {
                    const [minYear, maxYear] = searchYearRange;
                    // Since the API only allows filtering by one year value not range, we need to filter the results manually
                    data.Search = data.Search.filter((movie) => {
                        const year = parseInt(movie.Year);
                        return year >= minYear && year <= maxYear;
                    });
                }

                setMovies((prevMovies) => [...prevMovies, ...data.Search]);
                // KNOW BUG:
                // If using the year range filter, the total results will be off as we don't know if the user scrolled through all the results
                setNumResults(data.totalResults);

                setTotalPages(Math.ceil(data.totalResults / 10));

                if (data.Search.length > 0 && isNewSearch) {
                    // Pre-select the first movie in the list
                    await fetchSelectedMovie(data.Search[0].imdbID);
                }
            } else {
                // No results found
                setMovies([]);
                setNumResults(0);
                setSelectedMovie([]);
                setResponseMessage('No results found.')
            }
        } catch (error) {
            console.error(error);
        } finally {
            setListLoading(false);
            setCurrentPage((prev) => prev + 1)
        }
    };

    const throttledFetchMovies = useCallback(throttle(fetchMovies, 200), [currentPage, listLoading]);

    // Listen for changes in query and selectedSearchType
    useEffect(() => {
        throttledFetchMovies(searchQuery, selectedSearchType, searchYearRange, currentPage);
    }, [searchQuery, selectedSearchType, searchYearRange]);

    // Implement infinite scrolling
    const handleScroll = function () {
        if (listLoading || currentPage > totalPages) return;

        const $movieList = document.querySelector('.movie-list');
        if ($movieList.clientHeight + $movieList.scrollTop >= $movieList.scrollHeight - 15) {
            throttledFetchMovies(searchQuery, selectedSearchType, searchYearRange, currentPage);
        }
    }

    // Bind the handle scroll to a useEffect
    useEffect(() => {
        document.querySelector('.movie-list').addEventListener('scroll', handleScroll);
        return () => {
            document.querySelector('.movie-list').removeEventListener('scroll', handleScroll);
        }
    }, [throttledFetchMovies]);

    // Fetch selected movie from the API
    const fetchSelectedMovie = async function (imdbID) {
        if (selectedMovie.imdbID === imdbID) {
            return;
        }

        // Cached selected movie
        if (movieCache[imdbID]) {
            setSelectedMovie(movieCache[imdbID]);
            return;
        }

        setMovieLoading(true);

        try {
            const response = await fetch(`${BASE_URL}&i=${imdbID}`);
            const data = await response.json();
            setSelectedMovie(data);
            movieCache[imdbID] = data;
        } catch (error) {
            console.error(error);
        }
        setMovieLoading(false);
    };

    return (
        <MoviesContext.Provider value={{
            movies,
            selectedMovie,
            numResults,
            listLoading,
            movieLoading,
            responseMessage,
            fetchSelectedMovie
        }}>
            {children}
        </MoviesContext.Provider>
    );
}

