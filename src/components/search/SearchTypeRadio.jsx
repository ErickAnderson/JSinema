import PropTypes from "prop-types";
import "../../assets/styles/radio.css";

import {useSearch} from "../../context/SearchContext.jsx";

SearchTypeRadio.propTypes = {
    radioLabel: PropTypes.string.isRequired,
    radioValue: PropTypes.string.isRequired
}

function SearchTypeRadio({radioLabel, radioValue}) {
    const {selectedSearchType, setSelectedSearchType} = useSearch();

    return (
        <label className="cursor-pointer flex items-center">
            <input
                type="radio"
                name="type"
                value={radioValue}
                className="radio"
                checked={selectedSearchType === radioValue}
                onChange={(event) => setSelectedSearchType(event.target.value)}
            />
            {radioLabel}
        </label>
    )
}

export default SearchTypeRadio;