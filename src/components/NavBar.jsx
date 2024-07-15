import {useMovies} from "../context/MoviesContext.jsx";

function NavBar() {
    const {watchlist, loadMoviesFromWatchlist} = useMovies();

    return (
        <nav className="flex items-center justify-between">
            <h1 className="md:text-2xl font-bold"><span className="text-yellow-400">JS</span>inema</h1>

            <button
                aria-label="View watchlist"
                title="View your watchlist"
                className="text-yellow-400 text-sm"
                onClick={(e) => {
                    e.preventDefault();
                    loadMoviesFromWatchlist();
                }}
            >
                View watchlist
                <span className="bg-yellow-400 text-black font-bold rounded-full px-2 ml-2">{watchlist.length}</span>
            </button>
        </nav>
    );
}

export default NavBar;