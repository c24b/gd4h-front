import { BASE_URL, DATASETS } from "../dictionnary/url";

export const getAllDatasets = async () => {
    const data = await fetch(`${BASE_URL}/${DATASETS}`)
    const allDatasets = await data.json();
    return allDatasets;
}
