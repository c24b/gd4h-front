import { CORS_ANYWHERE, LANGUAGE } from "../dictionnary/temporary";
import { BASE_URL, DATASETS, FILTER, SEARCH } from "../dictionnary/url";

export const searchDatasetsByKeywords = async (query, language) => {
    const response = await fetch(`${CORS_ANYWHERE}/${BASE_URL}/${DATASETS}/${SEARCH}?query=${query}&lang=${language}`, {
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

export const searchDatasetsByFilters = async (body) => {
    const response = await fetch(`${CORS_ANYWHERE}/${BASE_URL}/${DATASETS}/${FILTER}?lang=${LANGUAGE}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    if (response.status !== 200) {
        console.log("Aouch, the request looks wrong... Response status is: " + response.status);
    }
    const results = await response.json();
    return results;
}