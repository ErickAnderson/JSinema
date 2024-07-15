import "../../assets/styles/radio.css";

function SearchTypeRadio({radioLabel, radioValue, selectedSearchType, setSelectedSearchType}) {
    const handleTypeChange = function (event) {
        setSelectedSearchType(event.target.value);
    };

    return (
        <label className="cursor-pointer flex items-center">
            <input
                type="radio"
                name="type"
                value={radioValue}
                className="radio"
                checked={selectedSearchType === radioValue}
                onChange={handleTypeChange}
            />
            {radioLabel}
        </label>
    )
}

export default SearchTypeRadio;