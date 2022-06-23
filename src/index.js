import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { countrysMarkup } from './countrysMarkup';
import { countryMarkup } from './countryMarkup';
import { fetchCountrys } from './fetchCountrys';



const DEBOUNCE_DELAY = 300;

const inputEl = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');
inputEl.addEventListener(
  'input',
  debounce(onInputSearchCountry, DEBOUNCE_DELAY)
);

function onInputSearchCountry() {
  const inputValue = inputEl.value.trim();

  if (inputValue.length > 0) {
  fetchCountrys(inputValue)
    .then(countrys => {
      if (countrys.length > 1 && countrys.length < 11) {
        clearInfo();
        addCountryMarkup(countrys, countryListEl, countrysMarkup);
      } else if (countrys.length === 1) {
        clearList();
        addCountryMarkup(countrys, countryInfoEl, countryMarkup);
      } else {
        clearAllCountryInfo();
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      clearAllCountryInfo();
     Notiflix.Notify.failure("Oops, there is no country with that name");
    });
  } else {
    clearAllCountryInfo();
  }
}

function clearAllCountryInfo() {
      clearInfo();
      clearList();
}

function clearList() {
  countryListEl.innerHTML = '';
}

function clearInfo() {
  countryInfoEl.innerHTML = '';
}

function addCountryMarkup(countrys, el, markup) {
  el.innerHTML = countrys
    .map(country => {
      return markup(country);
    })
    .join('');
}

Notiflix.Notify.init({
  width: '450px',
  position: 'center-top',
  distance: '10px',
  opacity: 1,
  fontSize: '24px',
});