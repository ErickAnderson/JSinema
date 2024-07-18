import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";

const SearchContext = createContext(null);
export function useSearch() {
    return useContext(SearchContext);
}

SearchProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export const SearchProvider = function ({children}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSearchType, setSelectedSearchType] = useState('');
    const [searchYearRange, setSearchYearRange] = useState([]);

    return (
        <SearchContext.Provider value={{
            searchQuery,
            setSearchQuery,
            selectedSearchType,
            setSelectedSearchType,
            searchYearRange,
            setSearchYearRange
        }}>
            {children}
        </SearchContext.Provider>
    );
}
