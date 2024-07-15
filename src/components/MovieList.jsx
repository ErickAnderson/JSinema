import Spinner from "./common/Spinner.jsx";
import MovieListItem from "./MovieListItem.jsx";

function MovieList({numResults, movies, fecthSelectedMovie, loading}) {
    return (
        <aside className="movie-list overflow-y-auto">
            <p className="p-2 md:p-4 border border-gray-600 text-xs">{numResults} RESULTS</p>

            {/*  Movie items  */}
            {loading ? (
                <Spinner loading={loading}/>
            ) : (
                <MovieListItem movies={movies} fecthSelectedMovie={fecthSelectedMovie}/>
            )}
        </aside>
    );
}

export default MovieList;