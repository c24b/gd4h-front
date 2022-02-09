import { CORS_ANYWHERE } from "../dictionnary/temporary";
import { BASE_URL, DATASETS, SEARCH } from "../dictionnary/url";

export const search = async (query, language) => {
    const data = await fetch(`${BASE_URL}/${DATASETS}/${SEARCH}?query=${query}&lang=${language}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const results = await data.json();
    return results;
}