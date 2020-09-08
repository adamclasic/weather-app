/* eslint-disable no-alert, import/no-extraneous-dependencies */
import 'bootstrap';
import './styles/style.scss';
import { getTemp } from './scripts/getTemp';
import domPopulator from './scripts/domPopulator';

getTemp().then(domPopulator);

const searchBtn = document.querySelector('form');
searchBtn.addEventListener('submit', (e) => {
  const searchValue = document.querySelector('#searchInput').value;
  const metricValue = document.querySelector('#inputMetric').value;
  e.preventDefault();
  getTemp(searchValue, metricValue)
    .then((res) => {
      domPopulator(res, metricValue);
    })
    .catch(() => {
      alert('location you entered is not valid.');
      getTemp().then((res) => {
        domPopulator(res, metricValue);
      });
    });
});
