import Spinner from "./common/Spinner.jsx";
import MovieListItem from "./MovieListItem.jsx";
import "../assets/styles/custom.css";

function MovieList({numResults, movies, fecthSelectedMovie, loading}) {
    return (
        <aside className="movie-list border border-gray-600">
            <p className="p-2 md:p-4 text-xs">{numResults} RESULTS</p>

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