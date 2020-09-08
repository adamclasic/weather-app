import rainGif from '../assets/images/rain.gif';
import clearPng from '../assets/images/clear-sky.png';
import cloudsGif from '../assets/images/clouds.gif';
import snowGif from '../assets/images/snow.gif';

function setBackgroundImage(status) {
  let url = '';
  switch (status) {
    case 'Rain':
      url = rainGif;
      break;
    case 'Thunderstorm':
      url = rainGif;
      break;
    case 'Drizzle':
      url = rainGif;
      break;
    case 'Clear':
      url = clearPng;
      break;
    case 'Snow':
      url = snowGif;
      break;
    default:
      url = cloudsGif;
      break;
  }
  return url;
}

export default function domPopulator(object, metricValue = 'Metric') {
  const unit = metricValue === 'Imperial' ? 'F' : 'C';
  const speedUnit = metricValue === 'Imperial' ? 'M' : 'Km';
  const weatherBox = document.querySelector('.weather-box');
  const cityName = weatherBox.querySelector('.city-name');
  const tempCels = weatherBox.querySelector('.temp-cont');
  const tempIcon = weatherBox.querySelector('#icon');
  const weatherStatus = weatherBox.querySelector('#weather');
  const tempMin = weatherBox.querySelector('#tempMin');
  const tempMax = weatherBox.querySelector('#tempMax');
  const wind = weatherBox.querySelector('#wind');
  const body = document.querySelector('body');
  const url = setBackgroundImage(object.weather[0].main);
  cityName.innerHTML = object.name;
  tempCels.innerHTML = `${object.main.temp} ${unit}`;
  tempIcon.setAttribute('src', `http://openweathermap.org/img/wn/${object.weather[0].icon}.png`);
  weatherStatus.innerHTML = object.weather[0].main;
  tempMin.innerHTML = `Min temp: ${object.main.temp_min} ${unit}`;
  tempMax.innerHTML = `Max temp: ${object.main.temp_max} ${unit}`;
  wind.innerHTML = `Wind speed: ${object.wind.speed} ${speedUnit}/H`;
  body.style.backgroundImage = `url(${url})`;
}