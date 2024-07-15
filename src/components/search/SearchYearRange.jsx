import ReactSlider from "react-slider";
import {useEffect} from "react";
import {useSearch} from "../../context/SearchContext.jsx";

import "../../assets/styles/slider.css";

function SearchYearRange({minYear = 1900}) {
    const maxYear = new Date().getFullYear();
    const {searchYearRange, setSearchYearRange} = useSearch();

    useEffect(() => {
        setSearchYearRange([minYear, maxYear]);
    }, []);

    return (
        <div>
            <p className="md:mb-2 font-bold">YEAR</p>

            <div className="flex items-center">
                <span className="w-12">{searchYearRange[0]}</span>

                <ReactSlider
                    className="w-44 flex place-items-center h-8 p-2"
                    thumbClassName="h-4 w-4 bg-yellow-400 rounded-full cursor-pointer focus:outline hover:outline outline-white hover:bg-yellow-500 hover:shadow-md"
                    trackClassName="year-range-track"
                    defaultValue={[minYear, maxYear]}
                    min={minYear}
                    max={maxYear}
                    ariaLabel={['Year from', 'Year to']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    pearling
                    onChange={(value) => setSearchYearRange(value)}
                />

                <span className="w-12 ml-2">{searchYearRange[1]}</span>
            </div>
        </div>
    );
}

export default SearchYearRange;