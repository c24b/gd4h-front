import { createContext } from 'react';
import { useState } from 'react';

const SearchResultsContext = createContext(undefined);
const SearchResultsDispatchContext = createContext(undefined);

const SearchResultsProvider = ({ children }) => {

    const [searchResults, setSearchResults] = useState([]);

    return (
        <SearchResultsContext.Provider value={searchResults}>
            <SearchResultsDispatchContext.Provider value={setSearchResults}>
                {children}
            </SearchResultsDispatchContext.Provider>
        </SearchResultsContext.Provider>
    );
}

export { SearchResultsProvider, SearchResultsContext, SearchResultsDispatchContext };