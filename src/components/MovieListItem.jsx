import PropTypes from "prop-types";
import noImage from "../assets/images/no-image.png";
import {useMovies} from "../context/MoviesContext.jsx";

MovieListItem.propTypes = {
    movie: PropTypes.object.isRequired
}

function MovieListItem({movie}) {
    const {selectedMovie, fetchSelectedMovie} = useMovies();

    return (
        <li className={
                `flex w-full border border-gray-600 p-2 max-h-32 h-full 
                hover:cursor-pointer hover:bg-yellow-400/25 hover:border-yellow-400
                ${selectedMovie.imdbID === movie.imdbID && 'bg-yellow-400/25 border-yellow-400'}`
            }
            onClick={() => fetchSelectedMovie(movie.imdbID)}
            onKeyUp={(e) => (e.key === 'Enter' ) && fetchSelectedMovie(movie.imdbID)}
            aria-label={`Select ${movie.Title}`}
            role="button"
            tabIndex="0"
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