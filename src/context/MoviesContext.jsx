import {createContext, useCallback, useContext, useEffect, useState} from 'react';
import {throttle} from "../utils/functions.js";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// Simple cache for selected movies
let movieCache = {};

const MoviesContext = createContext(null);

export function useMovies() {
    return useContext(MoviesContext);
}

export function MoviesProvider({children, query, selectedSearchType, searchYearRange}) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [numResults, setNumResults] = useState(0);

    const [listLoading, setListLoading] = useState(false);
    const [movieLoading, setMovieLoading] = useState(false);

    // Fetch movies from the API
    const fetchMovies = async function (searchQuery, selectedSearchType, searchYearRange) {
        if (!searchQuery) return;

        setListLoading(true);

        let url = `${BASE_URL}&s=${searchQuery}`;
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
                    data.Search = data.Search.filter((movie) => {
                        const year = parseInt(movie.Year);
                        return year >= minYear && year <= maxYear;
                    });
                }

                setMovies(data.Search);
                setNumResults(data.totalResults);
                if (data.Search.length > 0) {
                    await fetchSelectedMovie(data.Search[0].imdbID);
                }
            } else {
                // No results found
                setMovies([]);
                setNumResults(0);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setListLoading(false);
        }
    };
    const throttledFetchMovies = useCallback(throttle(fetchMovies, 300), []);

    // Listen for changes in query and selectedSearchType
    useEffect(() => {
        throttledFetchMovies(query, selectedSearchType, searchYearRange);
    }, [query, selectedSearchType, searchYearRange, throttledFetchMovies]);

    // Fetch selected movie from the API
    const fetchSelectedMovie = async function (imdbID) {
        if (selectedMovie.imdbID === imdbID) {
            return;
        }

        // Cache selected movie
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
        } finally {
            setMovieLoading(false);
        }
    };

    return (
        <MoviesContext.Provider value={{
            movies,
            selectedMovie,
            numResults,
            listLoading,
            movieLoading,
            fetchSelectedMovie
        }}>
            {children}
        </MoviesContext.Provider>
    );
}

