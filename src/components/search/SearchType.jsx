import SearchTypeRadio from "./SearchTypeRadio.jsx";

function SearchType({selectedSearchType, setSelectedSearchType}) {
    const types = [["Any", ""], ["Movie", "movie"], ["Series", "series"], ["Episode", "episode"]];

    return (
        <div>
            <p className="mb-2 font-bold">TYPE</p>

            <div className="flex gap-x-4 py-2">
                {types.map((type) => {
                        return (
                            <SearchTypeRadio
                                key={type[0]}
                                radioLabel={type[0]}
                                radioValue={type[1]}
                                selectedSearchType={selectedSearchType}
                                setSelectedSearchType={setSelectedSearchType}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default SearchType;