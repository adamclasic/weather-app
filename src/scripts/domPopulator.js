
import rainGif from '../assets/images/rain.gif';
import clearPng from '../assets/images/clear-sky.png';
import cloudsGif from '../assets/images/clouds.gif';
import snowGif from '../assets/images/snow.gif';

function setBackgroundImage( status ) {
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

export default function domPopulator(object) {
  let weatherBox = document.querySelector('.weather-box')
  let cityName = weatherBox.querySelector('.city-name');
  let tempCels = weatherBox.querySelector('.temp-cont');
  let tempIcon = weatherBox.querySelector('#icon');
  let weatherStatus = weatherBox.querySelector('#weather');
  let tempMin = weatherBox.querySelector('#tempMin');
  let tempMax = weatherBox.querySelector('#tempMax');
  let wind = weatherBox.querySelector('#wind');
  let body = document.querySelector('body');
  let url = setBackgroundImage(object.weather[0].main)
  cityName.innerHTML = object.name;
  tempCels.innerHTML = object.main.temp + ' C';
  tempIcon.setAttribute('src', "http://openweathermap.org/img/wn/" + object.weather[0].icon + ".png");
  weatherStatus.innerHTML = object.weather[0].main;
  tempMin.innerHTML = `Min temp: ${object.main.temp_min}` + ' C';
  tempMax.innerHTML = `Max temp: ${object.main.temp_max}` + ' C';
  wind.innerHTML = `Wind speed: ${object.wind.speed}` + ' Km/h';
  body.style.backgroundImage = `url(${url})`;
}