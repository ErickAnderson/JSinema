function SearchType({selectedSearchType, setSelectedSearchType}) {
    const handleTypeChange = function (event) {
        setSelectedSearchType(event.target.value);
    };

    return (
        <div>
            <p className="mb-2">TYPE</p>

            <div className="flex py-2 items-center gap-x-4 flex-wrap">
                <label>
                    <input
                        type="radio"
                        value=""
                        className="mr-2 accent-yellow-400"
                        checked={selectedSearchType === ''}
                        onChange={handleTypeChange}
                    />
                    Any
                </label>
                <label>
                    <input
                        type="radio"
                        value="movie"
                        className="mr-2 accent-yellow-400"
                        checked={selectedSearchType === 'movie'}
                        onChange={handleTypeChange}
                    />
                    Movies
                </label>
                <label>
                    <input
                        type="radio"
                        value="series"
                        className="mr-2 accent-yellow-400"
                        checked={selectedSearchType === 'series'}
                        onChange={handleTypeChange}
                    />
                    Series
                </label>
                <label>
                    <input
                        type="radio"
                        value="episode"
                        className="mr-2 accent-yellow-400"
                        checked={selectedSearchType === 'episode'}
                        onChange={handleTypeChange}
                    />
                    Episodes
                </label>
            </div>
        </div>
    );
}

export default SearchType;