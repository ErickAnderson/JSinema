import {FaSearch} from "react-icons/fa";
import {useSearch} from "../../context/SearchContext.jsx";

function SearchTitle() {
    const {searchQuery, setSearchQuery} = useSearch();

    return (
        <div className="relative grow basis-full lg:basis-0">
            <input
                type="text"
                id="search"
                name="search"
                placeholder="Search for a movie, series, episode..."
                className="py-2 pl-10 w-full text-lg md:text-3xl bg-slate-700 focus:outline-none focus:ring focus:ring-yellow-400"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />

            <FaSearch size="22" className="absolute top-1/2 left-2 transform -translate-y-1/2 text-yellow-400"/>
        </div>
    );
}

export default SearchTitle;