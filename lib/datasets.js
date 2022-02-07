export async function getAllDatasets() {
    const data = await fetch("http://api.gd4h.fr/datasets/")
    const allDatasets = await data.json();
    return allDatasets;
}