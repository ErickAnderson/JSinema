import {useState} from "react";
import ReactSlider from "react-slider";
import "../../assets/styles/slider.css";

function SearchYearRange({minYear = 1900, onRangeChange}) {
    const maxYear = new Date().getFullYear();

    const [yearRange, setYearRange] = useState([1900, maxYear]);

    const handleYearRangeChange = (range) => {
        setYearRange(range);
        // Update movie list based on the selected year range
        onRangeChange(range);
    }

    return (
        <div>
            <p className="mb-2 font-bold">YEAR</p>
            <div className="flex items-center">
                <span className="w-12">{yearRange[0]}</span>
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
                    onChange={(value) => handleYearRangeChange(value)}
                />

                <span className="w-12 ml-2">{yearRange[1]}</span>
            </div>
        </div>
    );
}

export default SearchYearRange;