import noImage from "../assets/no-image.png";

function MovieDetails({movie}) {
    return (
        <>
            <section className="w-full flex gap-2 relative">
                <img src={movie.Poster == 'N/A' ? noImage : movie.Poster} alt="Movie poster" className="w-full max-w-48 h-auto"/>

                {/* Watchlist button */}
                <button id="watchlist" className="p-2 bg-yellow-300 text-white absolute right-4 top-4">[] Watchlist</button>
                {/*  Movie details  */}
                <div className="movie-details self-end p-2 w-full">

                    <div className="movie-info flex flex-wrap gap-2 ">
                        <h2 className="text-3xl font-bold basis-full">{movie.Title}</h2>
                        <span className="movie-info-rating text-center border border-gray-400 rounded-lg px-2">{movie.Rated}</span>
                        <span className="movie-info-year">{movie.Year}</span>
                        <span className="movie-info-genre">{movie.Genre}</span>
                        <span className="movie-info-duration">{movie.Runtime}</span>
                    </div>
                    <div className="movie-details-cast">
                        <p>
                            {movie.Actors}
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y py-4">
                <strong>Description:</strong>
                <p className="text-gray-500 p-2">
                    {movie.Plot}
                </p>
            </section>

            <section className="grid sm:grid-cols-3 py-4">
                {/*  Movie review scores  */}
                <div className="flex justify-center items-center border-r">
                    <div className="rating text-center">
                        <p className="text-xl font-bold">
                            {movie.imdbRating}
                        </p>
                        <p className="text-gray-500">IMDB</p>
                    </div>
                </div>
                <div className="flex justify-center items-center border-r">
                    <div className="rating text-center">
                        <p className="text-xl font-bold">
                            {movie.Ratings.find((rating) => rating.Source === 'Rotten Tomatoes')?.Value || 'N/A'}
                        </p>
                        <p className="text-gray-500">Rotten Tomatoes</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="rating text-center">
                        <p className="text-xl font-bold">
                            {movie.Ratings.find((rating) => rating.Source === 'Metacritic')?.Value || 'N/A'}
                        </p>
                        <p className="text-gray-500">Metacritic</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MovieDetails;