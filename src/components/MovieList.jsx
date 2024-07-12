import React from 'react';
import noImage from '../assets/no-image.png';

function MovieList({numResults, movies, fecthSelectedMovie}) {
    return (
        <aside className="movie-list border border-gray-600">
            <p className="p-2 sm:p-4 text-xs">{numResults} RESULTS</p>

            {/*  Movie items  */}
            <ul className="h-64 sm:h-full overflow-y-auto">
                {movies.map((movie) => (
                    <li key={movie.imdbID} className="movie-item hover:bg-slate-700 hover:cursor-pointer flex w-full border border-gray-600 p-2 sm:p-4 max-h-32 h-full"
                        onClick={() => fecthSelectedMovie(movie.imdbID)}>
                        <img src={movie.Poster === 'N/A' ? noImage : movie.Poster} alt="Movie poster" className="max-w-20 object-cover"/>
                        <div className=" pl-2">
                            <h2 className="font-bold">{movie.Title}</h2>
                            <p className="text-gray-500">{movie.Year} | {movie.Type}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default MovieList;