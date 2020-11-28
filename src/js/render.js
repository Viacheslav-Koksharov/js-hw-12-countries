import countryCardTpl from "../templates/country-card.hbs";
import countriesListTpl from "../templates/country-list.hbs";
import fetchCountries from "./fetch-countries.js"
import { refs } from '../index.js';
import { errorMessage, onFetchError } from "./notify.js"

function onSearch(e) {
    e.preventDefault();
    const searchQuery = e.target.value.toLowerCase();

    fetchCountries(searchQuery)
        .then(data => {
            if (data.length === 1) {
                renderCountryCard(data)

            } else if (data.length > 1 && data.length <= 10) {
                renderCountriesList(data)

            }
            else {
                errorMessage();
                e.target.value = '';
            }
        })
        .catch(error => {
            onFetchError();
            e.target.value = '';
        });

}
function renderCountryCard(country) {
    const markup = countryCardTpl(country);
    refs.cardContainer.innerHTML = markup;
}

function renderCountriesList(countries) {
    const markupList = countriesListTpl(countries);
    refs.cardContainer.innerHTML = markupList;
}

export { onSearch }