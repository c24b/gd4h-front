export async function getAllFilters() {
    const data = await fetch("http://api.gd4h.fr/datasets/filters?lang=fr")
    const allFilters = await data.json();
    return allFilters;
}