import {useEffect, useState, useCallback} from 'react';
import {throttle} from "./utils/functions.js";

import NavBar from "./components/NavBar.jsx";
import Form from "./components/Form.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieCard from "./components/MovieCard.jsx";
import Footer from "./components/Footer.jsx";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// @TODO Maybe look into useMemo for caching
let movieCache = {};

function App() {
    const [query, setQuery] = useState('');
    const [selectedSearchType, setSelectedSearchType] = useState('');
    const [searchYearRange, setSearchYearRange] = useState([]);

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [numResults, setNumResults] = useState(0);
    const [movieloading, setMovieloading] = useState(false);
    const [listloading, setListloading] = useState(false);

    // Fetch movies from the API
    const fetchMovies = async function (searchQuery, selectedSearchType, searchYearRange) {
        if (!searchQuery) return;

        setListloading(true);

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
                    await fecthSelectedMovie(data.Search[0].imdbID);
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setListloading(false);
        }
    };
    const throttledFetchMovies = useCallback(throttle(fetchMovies, 300), []);

    // Listen for changes in query and selectedSearchType
    useEffect(() => {
        throttledFetchMovies(query, selectedSearchType, searchYearRange);
    }, [query, selectedSearchType, searchYearRange, throttledFetchMovies]);

    // Fetch selected movie from the API
    const fecthSelectedMovie = async function (imdbID) {
        if (selectedMovie.imdbID === imdbID) {
            return;
        }

        // Cache selected movie
        if (movieCache[imdbID]) {
            setSelectedMovie(movieCache[imdbID]);
            return;
        }

        setMovieloading(true);

        try {
            const response = await fetch(`${BASE_URL}&i=${imdbID}`);
            const data = await response.json();
            setSelectedMovie(data);
            movieCache[imdbID] = data;
        } catch (error) {
            console.error(error);
        } finally {
            setMovieloading(false);
        }
    };

    return (
        <div className="container flex flex-col gap-4 dark:text-white max-w-7xl mx-auto px-2 md:px-4">
            <NavBar/>

            <Form
                query={query}
                setQuery={setQuery}
                selectedSearchType={selectedSearchType}
                setSelectedSearchType={setSelectedSearchType}
                onYearRangeChange={(range) => setSearchYearRange(range)}
            />

            <main id="movies-wrapper" className="grow md:grid md:grid-cols-3 gap-4">
                {/* Movie list */}
                <MovieList
                    numResults={numResults}
                    movies={movies}
                    fecthSelectedMovie={fecthSelectedMovie}
                    loading={listloading}
                />

                {/*  Movie card  */}
                <MovieCard selectedMovie={selectedMovie} loading={movieloading}/>
            </main>

            <Footer/>
        </div>
    );
}

export default App;