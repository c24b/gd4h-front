import { BASE_URL, DATASETS } from "../dictionnary/url";

export async function getAllDatasets() {
    const data = await fetch(`${BASE_URL}/${DATASETS}`)
    const allDatasets = await data.json();
    return allDatasets;
}