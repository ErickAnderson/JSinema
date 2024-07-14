import noImage from "../assets/no-image.png";
import WatchlistButton from "./WatchlistButton.jsx";
import MovieRating from "./MovieRating.jsx";

function MovieDetails({selectedMovie}) {
    return (
        <>
            <section className="w-full flex gap-2 md:gap-4 relative">
                <img src={selectedMovie.Poster == 'N/A' ? noImage : selectedMovie.Poster} alt="Movie poster" className="w-full max-w-32 md:max-w-56 h-auto object-contain object-bottom "/>

                {/* Watchlist button */}
                <WatchlistButton selectedMovie={selectedMovie}/>

                {/*  Movie details  */}
                <div className="movie-details self-end pt-12 w-full">
                    <div className="movie-info flex flex-wrap gap-2 ">
                        <h2 className="text-3xl font-bold basis-full mb-2">{selectedMovie.Title}</h2>

                        <span className="movie-info-rating text-center border rounded-lg px-2">{selectedMovie.Rated}</span>
                        <span className="movie-info-year">{selectedMovie.Year}</span>
                        <span className="movie-info-genre">{selectedMovie.Genre}</span>
                        <span className="movie-info-duration">{selectedMovie.Runtime}</span>
                    </div>
                    <div className="mt-4">
                        <p>
                            {selectedMovie.Actors}
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y py-4">
                <p className="text-gray-400 p-2">
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