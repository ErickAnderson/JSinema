import {FaBookmark} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useMovies} from "../context/MoviesContext.jsx";

function WatchlistButton() {
    const {selectedMovie, watchlist, setWatchlist} = useMovies();
    const [movieOnWatchlist, setMovieOnWatchlist] = useState(false);

    // Check if the movie is already in the watchlist
    useEffect(() => {
        setMovieOnWatchlist(watchlist.some((item) => item.imdbID === selectedMovie.imdbID));
    }, [selectedMovie]);

    // Add/Remove the json list of movies to local storage
    function handleWatchlistChange(movie) {
        let localWatchlist = JSON.parse(localStorage.getItem('jsinema_watchlist')) || [];

        // If the movie is already in the watchlist, remove it otherwise add it
        if (movieOnWatchlist) {
            localWatchlist = localWatchlist.filter((item) => item.imdbID !== movie.imdbID);
        } else {
            localWatchlist.push(movie);
        }

        setMovieOnWatchlist(!movieOnWatchlist);
        setWatchlist(localWatchlist)
        localStorage.setItem('jsinema_watchlist', JSON.stringify(localWatchlist));
    }

    let style = 'hover:bg-yellow-400';
    let title = 'Add to your watchlist';

    if (movieOnWatchlist) {
        style = 'bg-yellow-400 hover:bg-red-500 hover:border-red-600';
        title = 'Remove from your watchlist';
    }

    return (
        <button
            className={`${style} flex gap-4 justify-between items-center py-2 px-4 border border-yellow-500 absolute right-0`}
            onClick={() => handleWatchlistChange(selectedMovie)}
            title={title}
            aria-label={title}
            aria-pressed={movieOnWatchlist}
        >
            <FaBookmark className="inline-block h-full"/>
            <span>Watchlist</span>
        </button>
    );
}

export default WatchlistButton;