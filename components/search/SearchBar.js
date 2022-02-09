import { useState } from "react";
import { useContext } from "react";
import { DataContext, DataDispatchContext } from "../../context/DataProvider";
import { LANGUAGE } from "../../dictionnary/temporary";
import { search } from "../../lib/search";

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const setCurrentDatasets = useContext(DataDispatchContext);

    const currentDatasets = useContext(DataContext);

    const handleChange = async (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const matchingDatasets = await search(searchQuery, LANGUAGE);
        console.log(matchingDatasets.results)
        setCurrentDatasets(matchingDatasets.results)
        console.log(currentDatasets);
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