function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;capital;population;languages;flag`
    return fetch(url)
        .then(status)
        .then(json)
}
function status(response) {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response);
}

function json(response) {
    return response.json();
}
export default fetchCountries;