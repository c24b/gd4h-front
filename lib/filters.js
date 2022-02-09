import { LANGUAGE } from "../dictionnary/temporary";
import { BASE_URL, DATASETS, FILTERS } from "../dictionnary/url";

export const getAllFilters = async () => {
    const data = await fetch(`${BASE_URL}/${DATASETS}/${FILTERS}?lang=${LANGUAGE}`)
    const allFilters = await data.json();
    return allFilters;
}