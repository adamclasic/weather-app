
import rainGif from '../assets/images/rain.gif';
import clearPng from '../assets/images/clear-sky.png';
import cloudsGif from '../assets/images/clouds.gif';
import snowGif from '../assets/images/snow.gif';
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

  cityName.innerHTML = object.name;
  tempCels.innerHTML = object.main.temp + ' C';
  tempIcon.setAttribute('src', "http://openweathermap.org/img/wn/" + object.weather[0].icon + ".png");
  weatherStatus.innerHTML = object.weather[0].main;
  tempMin.innerHTML = `Min temp: ${object.main.temp_min}` + ' C';
  tempMax.innerHTML = `Max temp: ${object.main.temp_max}` + ' C';
  wind.innerHTML = `Wind speed: ${object.wind.speed}` + ' Km/h';

  let url = '';

  switch (object.weather[0].main) {
    case 'Rain':
      // url = 'url(./assets/images/rain.gif)'
      url = rainGif;
      break;
    case 'shower rain':
      url = rainGif;
      break;
    case 'clear sky':
      url = clearPng;
      break;
    case 'snow':
      url = snowGif;
      break;
    default:
      url = cloudsGif;
      break;
  }
console.log(rainGif);
  body.style.backgroundImage = `url(${url})`;
}