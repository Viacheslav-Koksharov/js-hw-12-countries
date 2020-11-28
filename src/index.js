import './styles.css';
import '../node_modules/modern-normalize/modern-normalize.css';
import debounce from 'lodash';
import { onSearch } from "./js/render.js"


const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form'),
}

refs.searchForm.addEventListener('input', _.debounce(onSearch, 500))


export { refs };








