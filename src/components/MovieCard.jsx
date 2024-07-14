import MovieDetails from "./MovieDetails.jsx";
import Spinner from "./Spinner.jsx";

function MovieCard({movie, loading}) {
    if (movie.length === 0) {
        return (
            <div className="border md:col-span-2 flex flex-col border-gray-500 p-4 gap-4 max-w-full">
                <p className="text-center">Use the search above to find a movie.</p>

            </div>
        );
    } else {
        return (
            <div className="border md:col-span-2 flex flex-col border-gray-500 p-4 gap-4 max-w-full">
                { loading ? (
                    <Spinner loading={loading}/>
                ) : (
                    <MovieDetails selectedMovie={movie}/>
                )}
            </div>
        );
    }
}

export default MovieCard;