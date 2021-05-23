import axios from 'axios';
import { cardContainer } from './refs';

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name/';

export default function fetchCountries (serchCountry) {
    cardContainer.innerHTML = '';
    return axios(`${serchCountry}`).then(response => response.data);
}
