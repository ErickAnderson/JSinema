import MovieDetails from "./MovieDetails.jsx";

function MovieCard({movie}) {
    if (movie.length === 0) {
        return (
            <div className="border sm:col-span-2 flex flex-col border-gray-500 p-4 gap-4 max-w-full">
                <p className="text-center">Use the search above to find a movie.</p>

            </div>
        );
    } else {
        return (
            <div className="border sm:col-span-2 flex flex-col border-gray-500 p-4 gap-4 max-w-full">
                <MovieDetails movie={movie}/>
            </div>
        );
    }
}

export default MovieCard;