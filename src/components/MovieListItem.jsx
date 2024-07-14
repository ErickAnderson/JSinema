import noImage from "../assets/no-image.png";

function MovieListItem({movies, fecthSelectedMovie}) {
    return (
        <ul className="h-64 sm:h-full overflow-y-auto">
            {movies.map((movie) => (
                <li key={movie.imdbID} className="movie-item hover:bg-yellow-400/25 z-50 hover:cursor-pointer flex w-full border border-gray-600 hover:border-y-amber-400 p-2 sm:p-4 max-h-32 h-full"
                    onClick={() => fecthSelectedMovie(movie.imdbID)}>
                    <img src={movie.Poster === 'N/A' ? noImage : movie.Poster} alt="Movie poster" className="max-w-20 object-cover"/>
                    <div className=" pl-2">
                        <h2 className="font-bold">{movie.Title}</h2>
                        <p className="text-gray-400">{movie.Year} | {movie.Type}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default MovieListItem;