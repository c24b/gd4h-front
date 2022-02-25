import { CORS_ANYWHERE, LANGUAGE } from "../dictionnary/temporary";
import { BASE_URL, DATASETS, FILTERS, SEARCH } from "../dictionnary/url";
//import mockData from "../mocks/API/datasets/searchByFilters.json";

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
    const response = await fetch(`${BASE_URL}/${DATASETS}/${FILTERS}?lang=${LANGUAGE}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    if (response.status == 422){
        console.log(response);
    }
    if (response.status !== 200) {
        console.log("Aouch, the request looks wrong... Response status is: " + response.status);
    }
    const results = await response.json();
    console.log("RES", results);
    console.log("STATUS", response.status);
    return results;
}

/**
 * ! Temporary, we use this method to return a mock json
 * ! while API POST methods do not work
 */

// export const searchDatasetsByFiltersMock = async () => {
//     return mockData;
// }