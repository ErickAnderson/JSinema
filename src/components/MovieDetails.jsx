import WatchlistButton from "./WatchlistButton.jsx";
import MovieRating from "./MovieRating.jsx";
import {useMovies} from "../context/MoviesContext.jsx";

import noImage from "../assets/images/no-image.png";

function MovieDetails() {
    const {selectedMovie} = useMovies();

    return (
        <>
            <section className="w-full flex flex-wrap md:flex-nowrap gap-2 md:gap-4 relative">
                <img src={selectedMovie.Poster == 'N/A' ? noImage : selectedMovie.Poster} alt={`${selectedMovie.Title} poster`} className="w-full max-w-32 md:max-w-56 h-auto object-contain object-bottom "/>

                {/* Watchlist button */}
                <WatchlistButton/>

                {/*  Movie details  */}
                <div className="self-end md:pt-12 w-full">
                    <div className="flex flex-wrap gap-2 ">
                        <h2 aria-label="Movie Title" className="text-xl md:text-3xl font-bold basis-full mb-2">{selectedMovie.Title}</h2>

                        <span aria-label="Movie Rated" className="text-center border rounded-lg px-2">{selectedMovie.Rated}</span>
                        <span aria-label="Movie year">{selectedMovie.Year}</span>
                        <span aria-label="Monvie genre">{selectedMovie.Genre}</span>
                        <span aria-label="Movie Duration">{selectedMovie.Runtime}</span>
                    </div>
                    <div className="mt-4">
                        <p>
                            {selectedMovie.Actors}
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y py-4">
                <p aria-label="Movie Plot" className="text-gray-400 p-2">
                    {selectedMovie.Plot}
                </p>
            </section>

            <section className="flex justify-center p-2">
                {/*  Movie reviews  */}
                {selectedMovie.Ratings.map((rating) =>
                    <MovieRating key={rating.Source} source={rating.Source} rating={rating.Value}/>
                )}
            </section>
        </>
    );
}

export default MovieDetails;