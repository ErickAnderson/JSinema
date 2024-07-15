import SearchTypeRadio from "./SearchTypeRadio.jsx";

function SearchType() {
    const types = [["Any", ""], ["Movie", "movie"], ["Series", "series"], ["Episode", "episode"]];

    return (
        <div>
            <p className="md:mb-2 font-bold">TYPE</p>

            <div className="flex gap-x-4 py-2">
                {types.map((type) => {
                        return (
                            <SearchTypeRadio
                                key={type[0]}
                                radioLabel={type[0]}
                                radioValue={type[1]}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default SearchType;