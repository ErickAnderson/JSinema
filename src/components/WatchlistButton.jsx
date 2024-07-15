import {FaBookmark} from "react-icons/fa";
import {useEffect, useState} from "react";

function WatchlistButton({selectedMovie}) {
    const [onWatchlist, setOnWatchlist] = useState(false);

    // Check if the movie is already in the watchlist
    useEffect(() => {
        let watchlist = JSON.parse(localStorage.getItem('jsinema_watchlist')) || [];
        setOnWatchlist(watchlist.some((item) => item.imdbID === selectedMovie.imdbID));
    }, [selectedMovie]);

    // Add/Remove the json list of movies to local storage
    function handleWatchlist(movie) {
        let watchlist = JSON.parse(localStorage.getItem('jsinema_watchlist')) || [];

        // If the movie is already in the watchlist, remove it otherwise add it
        if (onWatchlist) {
            watchlist = watchlist.filter((item) => item.imdbID !== movie.imdbID);
        } else {
            watchlist.push(movie);
        }

        setOnWatchlist(!onWatchlist);
        localStorage.setItem('jsinema_watchlist', JSON.stringify(watchlist));
    }

    let style = 'hover:bg-yellow-400';
    let title = 'Add to your watchlist';

    if (onWatchlist) {
        style = 'bg-yellow-400 hover:bg-red-500 hover:border-red-600';
        title = 'Remove from your watchlist';
    }

    return (
        <button
            className={`${style} flex gap-4 justify-between items-center py-2 px-4 border border-yellow-500 absolute right-0`}
            onClick={() => handleWatchlist(selectedMovie)}
            title={title}
            aria-label={title}
            aria-pressed={onWatchlist}
        >
            <FaBookmark className="inline-block h-full"/>
            <span>Watchlist</span>
        </button>
    );
}

export default WatchlistButton;