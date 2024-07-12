// @TODO prop validation
// @TODO add year range input component
// @TODO add type of movie radios component
// @TODO add search input component

function Header({query, setQuery}) {
    return (
        <header id="search-form" className="flex items-center">
            <input
                type="text"
                id="search"
                placeholder="Search for a movie"
                className="p-2 w-full border border-slate-600 bg-slate-800 focus:outline-none focus:ring focus:ring-yellow-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <input type="range" id="year" name="year" min="1900" max="2021" className="ml-2"/>

            <div className="flex gap-2 items-center ml-2">
                <input type="radio" id="movie" name="type" value="movie"/>
                <label htmlFor="movie">Movie</label>
                <input type="radio" id="series" name="type" value="series"/>
                <label htmlFor="series">Series</label>
                <input type="radio" id="episode" name="type" value="episode"/>
                <label htmlFor="episode">Episode</label>
            </div>
        </header>
    );
}

export default Header;