/* eslint-disable no-alert, import/no-extraneous-dependencies */
import 'bootstrap';
import './styles/style.scss';
import { getTemp } from './scripts/getTemp';
import domPopulator from './scripts/domPopulator';

// console.log(https://api.openweathermap.org/data/2.5/weather?q=paris&appid=98f5c39a38b987172eb484d62acb0f9c&units=metric`)

getTemp().then(domPopulator);
getTemp('paris').then(console.log);

const searchBtn = document.querySelector('form');
searchBtn.addEventListener('submit', (e) => {
  const searchValue = document.querySelector('#searchInput').value;
  e.preventDefault();
  getTemp(searchValue)
    .then(domPopulator)
    .catch(() => {
      alert('location you entered is not valid.');
      getTemp().then(domPopulator);
    });
});
