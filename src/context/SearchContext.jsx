import {createContext, useContext, useState} from "react";

const SearchContext = createContext(null);
export function useSearch() {
    return useContext(SearchContext);
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
