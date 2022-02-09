import { BASE_URL, DATASETS, SEARCH } from "../dictionnary/url";

export const searchDatasets = async (query, language) => {
    const response = await fetch(`${BASE_URL}/${DATASETS}/${SEARCH}?query=${query}&lang=${language}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (response.status !== 200) {
        console.log("Aouch, the request looks wrong... Response status is: " + response.status);
        return { query: query, results: [] };
    }
    const results = await response.json();
    return results;
}