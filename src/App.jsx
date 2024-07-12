import {useEffect, useState, useCallback} from 'react';
import {throttle} from "./utils/functions.js";

import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieCard from "./components/MovieCard.jsx";
import Footer from "./components/Footer.jsx";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// @TODO Maybe look into useMemo for caching
let movieCache = {};

function App() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [numResults, setNumResults] = useState(0);

    const fetchMovies = async function (searchQuery) {
        if (!searchQuery) return;

        const response = await fetch(`${BASE_URL}&s=${searchQuery}`);
        const data = await response.json();
        if (data.Search) {
            setMovies(data.Search);
            setNumResults(data.totalResults);
            if (data.Search.length > 0) {
                await fecthSelectedMovie(data.Search[0].imdbID);
            }
        }
    };
    const throttledFetchMovies = useCallback(throttle(fetchMovies, 300), []);

    const fecthSelectedMovie = async function (imdbID) {
        if (selectedMovie.imdbID === imdbID) {
            return;
        }

        // Cache selected movie
        if (movieCache[imdbID]) {
            setSelectedMovie(movieCache[imdbID]);
            return;
        }

        const response = await fetch(`${BASE_URL}&i=${imdbID}`);
        const data = await response.json();
        setSelectedMovie(data);
        movieCache[imdbID] = data;
    };

    useEffect(() => {
        throttledFetchMovies(query);
    }, [query, throttledFetchMovies]);

    return (
        <>
            {/* Wrapper */}
            <div className="grow w-full flex flex-col gap-4 dark:text-white">
                <NavBar/>
                {/*  Search form  */}
                <Header query={query} setQuery={setQuery}/>
                {/*  Movies section divided in 2 columns 33/66% */}
                <main id="movies-wrapper" className="grow sm:grid sm:grid-cols-3 gap-4">
                    {/* Movie list */}
                    <MovieList numResults={numResults} movies={movies} fecthSelectedMovie={fecthSelectedMovie}/>
                    {/*  Movie card  */}
                    <MovieCard movie={selectedMovie}/>
                </main>
            </div>
            <Footer/>
        </>
    );
}

export default App;