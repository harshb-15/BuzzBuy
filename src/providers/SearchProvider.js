import React, { createContext, useContext, useState } from 'react';
const SearchContext = createContext();

function SearchProvider({ children }) {
    const [search, setSearch] = useState("");

    function setSearchQuery(query)
    {
        setSearch(query);
    }

    return (
        <SearchContext.Provider value={{ search, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
}
export const useSearch = () => useContext(SearchContext);
export default SearchProvider;
