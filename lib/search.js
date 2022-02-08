import { BASE_URL, DATASETS, SEARCH } from "../dictionnary/url";

export const search = async (query, language) => {

    /**
     * ! Temporary to workaroung CORS issues
     */

    const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com"

    const data = await fetch(`${CORS_ANYWHERE}/${BASE_URL}/${DATASETS}/${SEARCH}?query=${query}&lang=${language}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const results = await data.json();
    return results;
}