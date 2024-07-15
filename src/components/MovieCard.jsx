import MovieDetails from "./MovieDetails.jsx";
import Spinner from "./common/Spinner.jsx";
import {useMovies} from "../context/MoviesContext.jsx";

function MovieCard() {
    const {selectedMovie, movieLoading} = useMovies();

    if (selectedMovie.length === 0) {
        return (
            <div className="md:col-span-2 flex flex-col border-gray-500 p-2 gap-4 max-w-full">
                <p className="text-center">Use the search above to find a movie.</p>
            </div>
        );
    } else {
        return (
            <div className="md:col-span-2 flex flex-col p-2 gap-4">
                {movieLoading ? (
                    <Spinner loading={movieLoading}/>
                ) : (
                    <MovieDetails selectedMovie={selectedMovie}/>
                )}
            </div>
        );
    }
}

export default MovieCard;