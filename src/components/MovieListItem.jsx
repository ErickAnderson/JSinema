import noImage from "../assets/images/no-image.png";
import {useMovies} from "../context/MoviesContext.jsx";

function MovieListItem({movie}) {
    const {fetchSelectedMovie} = useMovies();

    return (
        <li className="movie-item hover:bg-yellow-400/25 hover:cursor-pointer flex w-full border border-gray-600 hover:border-yellow-400 p-2 max-h-32 h-full"
            onClick={() => fetchSelectedMovie(movie.imdbID)}
        >
            <img src={movie.Poster === 'N/A' ? noImage : movie.Poster} alt={movie.Title} className="max-w-20 object-contain"/>

            <div className="pl-2 overflow-clip">
                <h2 className="font-bold">{movie.Title}</h2>
                <p className="text-gray-400">{movie.Year} | {movie.Type}</p>
            </div>
        </li>
    );
}

export default MovieListItem;