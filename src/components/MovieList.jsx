import Spinner from "./common/Spinner.jsx";
import MovieListItem from "./MovieListItem.jsx";
import {useMovies} from "../context/MoviesContext.jsx";

function MovieList() {
    const {movies, numResults, listLoading} = useMovies();

    return (
        <aside className="movie-list overflow-y-auto pr-1">
            <p className="p-2 md:p-4 border border-gray-600 text-xs">{numResults} RESULTS</p>

            {/*  Movie items  */}
            <ul>
                {movies.map((movie) => (
                    <MovieListItem key={movie.imdbID} movie={movie}/>
                ))}
            </ul>
            {listLoading && <Spinner loading={listLoading}/>}
        </aside>
    );
}

export default MovieList;