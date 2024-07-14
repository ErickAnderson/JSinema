// @TODO prop validation
// @TODO add year range input component
// @TODO add type of movie radios component
// @TODO add search input component

import SearchType from "./search/SearchType.jsx";
import SearchYearRange from "./search/SearchYearRange.jsx";
import SearchTitle from "./search/SearchTitle.jsx";

function Form({query, setQuery, selectedSearchType, setSelectedSearchType, onYearRangeChange}) {
    const handleRangeChange = function (range) {
        onYearRangeChange(range);
    };

    return (
        <form id="search-form" className="flex gap-6 items-center flex-wrap">
            <SearchTitle query={query} setQuery={setQuery}/>

            <SearchYearRange onRangeChange={handleRangeChange}/>

            <SearchType
                selectedSearchType={selectedSearchType}
                setSelectedSearchType={setSelectedSearchType}
            />
        </form>
    );
}

export default Form;