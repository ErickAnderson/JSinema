function App() {
    return (
        <>
            {/* Main */}
            <main className="grow w-full flex flex-col gap-4 dark:text-white">
                <nav className="flex items-center justify-between mt-2 sm:mt-4">
                    <a href="/" aria-label="Home">
                        <h1 className="sm:text-2xl font-bold text-zinc-950 dark:text-white"><span className="text-yellow-400">JS</span>inema</h1>
                    </a>
                </nav>

                {/*  Search form  */}
                <section id="search-form" className="flex items-center">
                    <input type="text" id="search" placeholder="Search for a movie" className="p-2 w-full border border-slate-600 bg-slate-800 focus:outline-none focus:ring focus:ring-yellow-400"/>
                    <button id="search-btn" className="p-2 bg-yellow-400 text-white ml-2">Search</button>

                    <input type="range" id="year" name="year" min="1900" max="2021" className="ml-2"/>

                    {/* Type of movie radios */}
                    <div className="flex gap-2 items-center ml-2">
                        <input type="radio" id="movie" name="type" value="movie"/>
                        <label htmlFor="movie">Movie</label>
                        <input type="radio" id="series" name="type" value="series"/>
                        <label htmlFor="series">Series</label>
                        <input type="radio" id="episode" name="type" value="episode"/>
                        <label htmlFor="episode">Episode</label>
                    </div>
                </section>

                {/*  Movies section divided in 2 columns 33/66% */}
                <section id="movies-wrapper" className="grow grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {/* Movie list */}
                    <div className="movie-list border border-gray-600 overflow-y-auto scroll-smooth">
                        <p className="p-2 sm:p-4 text-xs">123 RESULTS</p>

                        {/*  Movie item  */}
                        <div className="movie-item hover:bg-slate-700 hover:cursor-pointer flex w-full border border-gray-600 p-2 sm:p-4 max-h-32 h-full">
                            <img src="https://via.placeholder.com/720x1280" alt="Movie poster" className="max-h-full object-contain"/>
                            <div className=" pl-2">
                                <h2 className="text-xl font-bold">Movie Title</h2>
                                <p className="text-gray-500">2021 | Movie</p>
                            </div>
                        </div>

                        <div className="movie-item hover:bg-slate-700 hover:cursor-pointer flex w-full border border-gray-600 p-2 sm:p-4 max-h-32 h-full">
                            <img src="https://via.placeholder.com/720x1280" alt="Movie poster" className="max-h-full object-contain"/>
                            <div className=" pl-2">
                                <h2 className="text-xl font-bold">Movie Title</h2>
                                <p className="text-gray-500">2021 | Movie</p>
                            </div>
                        </div>

                        <div className="movie-item hover:bg-slate-700 hover:cursor-pointer flex w-full border border-gray-600 p-2 sm:p-4 max-h-32 h-full">
                            <img src="https://via.placeholder.com/720x1280" alt="Movie poster" className="max-h-full object-contain"/>
                            <div className=" pl-2">
                                <h2 className="text-xl font-bold">Movie Title</h2>
                                <p className="text-gray-500">2021 | Movie</p>
                            </div>
                        </div>

                        <div className="movie-item hover:bg-slate-700 hover:cursor-pointer flex w-full border border-gray-600 p-2 sm:p-4 max-h-32 h-full">
                            <img src="https://via.placeholder.com/720x1280" alt="Movie poster" className="max-h-full object-contain"/>
                            <div className=" pl-2">
                                <h2 className="text-xl font-bold">Movie Title</h2>
                                <p className="text-gray-500">2021 | Movie</p>
                            </div>
                        </div>

                        <div className="movie-item hover:bg-slate-700 hover:cursor-pointer flex w-full border border-gray-600 p-2 sm:p-4 max-h-32 h-full">
                            <img src="https://via.placeholder.com/720x1280" alt="Movie poster" className="max-h-full object-contain"/>
                            <div className=" pl-2">
                                <h2 className="text-xl font-bold">Movie Title</h2>
                                <p className="text-gray-500">2021 | Movie</p>
                            </div>
                        </div>
                    </div>

                    {/*  Movie card  */}
                    <div className="border sm:col-span-2 flex flex-col border-gray-500 p-4 gap-4">
                        <section className="w-full flex gap-2 relative">
                            <img src="https://via.placeholder.com/720x1280" alt="Movie poster" className="w-full max-w-48 h-auto"/>


                            {/* Watchlist button */}
                            <button id="watchlist" className="p-2 bg-yellow-300 text-white absolute right-4 top-4">[] Watchlist</button>
                            {/*  Movie details  */}
                            <div className="movie-details self-end p-2 w-full">

                                <div className="movie-info flex flex-wrap gap-2 ">
                                    <h2 className="text-3xl font-bold basis-full">Movie Title</h2>
                                    <span className="movie-info-rating text-center border border-gray-400 rounded-lg px-2">PG</span>
                                    <span className="movie-info-year">2021</span>
                                    <span className="movie-info-category"> Action, Adventure, Sci-Fi</span>
                                    <span className="movie-info-duration">124min</span>
                                </div>
                                <div className="movie-details-actors">
                                    <p>
                                        Actor 1, Actor 2, Actor 3, Actor 4
                                    </p>
                                </div>
                            </div>

                        </section>

                        <section className="border-y py-4">
                            <strong>Description:</strong>
                            <p className="text-gray-500 p-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.
                            </p>
                        </section>

                        <section className="grid sm:grid-cols-3 py-4">
                            {/*  Movie review scores  */}
                            <div className="flex justify-center items-center border-r">
                                <div className="rating text-center">
                                    <p className="text-xl font-bold">8.5</p>
                                    <p className="text-gray-500">IMDB</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center border-r">
                                <div className="rating text-center">
                                    <p className="text-xl font-bold">95%</p>
                                    <p className="text-gray-500">Rotten Tomatoes</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="rating text-center">
                                    <p className="text-xl font-bold">85%</p>
                                    <p className="text-gray-500">Metacritic</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>

            <footer className="bg-zinc-950 dark:bg-gray-900 text-white w-full p-1">
                <p className="text-right w-full">
                    Created by <a href="https://github.com/ErickAnderson" target="_blank" rel="noreferrer noopener">Erick Anderson</a>
                </p>
            </footer>
            {/*  @TODO separate into components  */}
        </>
    )
}

export default App