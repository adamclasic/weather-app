/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap';
import './styles/style.scss';
import { getTemp } from './scripts/getTemp';
import domPopulator from './scripts/domPopulator';

getTemp()
  .then((res) => {
    domPopulator(res, 'Metric');
    document.querySelector('#searchInput').value = res.name;
  });

const searchBtn = document.querySelector('form');
const toggleBtn = document.querySelector('#toggleFC');

searchBtn.addEventListener('submit', (e) => {
  const searchValue = document.querySelector('#searchInput').value;
  const metricValue = document.querySelector('#inputMetric').value;
  e.preventDefault();
  getTemp(searchValue, metricValue)
    .then((res) => {
      domPopulator(res, metricValue);
      document.querySelector('#searchInput').value = res.name;
    })
    .catch(() => {
      document.querySelector('.alert').classList.add('show');
      setTimeout(() => {
        document.querySelector('.alert').classList.remove('show');
      }, 1500);
      getTemp().then((res) => {
        domPopulator(res);
        document.querySelector('#searchInput').value = res.name;
      });
    });
});

toggleBtn.addEventListener('click', () => {
  const searchValue = document.querySelector('#searchInput').value;
  let metricValue = document.querySelector('#inputMetric').value;
  metricValue = metricValue === 'Metric' ? 'Imperial' : 'Metric';
  document.querySelector('#inputMetric').value = metricValue;
  getTemp(searchValue, metricValue).then((res) => {
    domPopulator(res, metricValue);
  });
});
