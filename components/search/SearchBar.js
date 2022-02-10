import { useState, useContext } from "react";
import { DatasetsDispatchContext } from "../../context/DatasetsProvider";
import { SearchResultsDispatchContext } from "../../context/SearchResultsProvider";
import { LANGUAGE } from "../../dictionnary/temporary";
import { searchDatasetsByKeywords } from "../../lib/datasets";

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const setCurrentDatasets = useContext(DatasetsDispatchContext);
    const setSearchResults = useContext(SearchResultsDispatchContext);

    const handleChange = async (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (searchQuery != "") {
            const matchingDatasets = await searchDatasetsByKeywords(searchQuery, LANGUAGE);
            setSearchResults(matchingDatasets.query);
            setCurrentDatasets(matchingDatasets.results);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="fr-search-bar" id="header-search" role="search">
                <label className="fr-label" for="search-784-input">
                    Recherche
                </label>
                <input
                    className="fr-input"
                    placeholder="Rechercher"
                    type="search"
                    id="search-784-input"
                    name="search-784-input"
                    value={searchQuery}
                    onChange={handleChange} />
                <button
                    className="fr-btn"
                    title="Rechercher"
                    type="submit"
                    value="Submit" />
            </div>
        </form>)
}

export default SearchBar;