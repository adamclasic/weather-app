/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap';
import './styles/style.scss';
import { getTemp } from './scripts/getTemp';
import domPopulator from './scripts/domPopulator';

getTemp().then(domPopulator);

const searchBtn = document.querySelector('form');
const toggleBtn = document.querySelector('#toggleFC');

searchBtn.addEventListener('submit', (e) => {
  const searchValue = document.querySelector('#searchInput').value;
  const metricValue = document.querySelector('#inputMetric').value;
  e.preventDefault();
  getTemp(searchValue, metricValue)
    .then((res) => {
      domPopulator(res, metricValue);
    })
    .catch(() => {
      // alert('location you entered is not valid.');
      document.querySelector('.alert').classList.add('show')
      setTimeout(() => {
      document.querySelector('.alert').classList.remove('show')
      }, 3000)
      document.querySelector('#searchInput').value = '';
      getTemp().then(domPopulator);
    });
});

toggleBtn.addEventListener('click', () => {
  console.log('hi');
  const searchValue = document.querySelector('#searchInput').value;
  let metricValue = document.querySelector('#inputMetric').value;
  metricValue = metricValue === 'Metric' ? 'Imperial' : 'Metric';
  document.querySelector('#inputMetric').value = metricValue;
  console.log(metricValue);
  getTemp(searchValue, metricValue).then((res) => {
    domPopulator(res, metricValue)
  });
});
