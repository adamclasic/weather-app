import 'bootstrap';
import './styles/style.scss';

import { getTemp } from './scripts/getTemp'
import domPopulator from './scripts/domPopulator'





getTemp().then(domPopulator);
getTemp().then(console.log);

// take use of search btn

let searchBtn = document.querySelector('form');
console.log(searchBtn);
searchBtn.addEventListener('submit', (e) => {
  let searchValue = document.querySelector('#searchInput').value;
  e.preventDefault();
  getTemp(searchValue)
    .then(domPopulator)
    .catch((e) => {
      console.log(e)
      alert('location you entered is not valid')
      getTemp().then(domPopulator)
    })
})

// document.querySelector('body').style.backgroundImage = 'URL(./assets/images/rain.gif)'