import 'bootstrap';
import './styles/style.scss';

async function getIp() {
  const ip = await fetch("https://api.ipify.org/?format=json");
  const dataIp = await ip.json();
  return dataIp.ip;
}


async function getLocation(ip) {
  
  const location = await fetch("https://ipapi.co/" + ip + "/json/");
  const dataLocation = await location.json();
  return dataLocation.region;
}

async function getTemp(location=null) {

  if (!location) {
    let ip = await getIp()
    location = await getLocation(ip);
  }
    let temp = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=98f5c39a38b987172eb484d62acb0f9c&units=metric");
    let data = await temp.json();
    return data;
}

function domPopulator(res) {
  
  let weatherBox = document.querySelector('.weather-box')
  let cityName = weatherBox.querySelector('.city-name');
  let tempCels = weatherBox.querySelector('.temp-cont');
  let tempIcon = weatherBox.querySelector('#icon');
  let weatherStatus = weatherBox.querySelector('#weather');
  let tempMin = weatherBox.querySelector('#tempMin');
  let tempMax = weatherBox.querySelector('#tempMax');
  let wind = weatherBox.querySelector('#wind');

  cityName.innerHTML = res.name;
  tempCels.innerHTML = res.main.temp + ' C';
  tempIcon.setAttribute('src', "http://openweathermap.org/img/wn/" + res.weather[0].icon + ".png");
  weatherStatus.innerHTML = res.weather[0].main;
  tempMin.innerHTML = `Min temp: ${res.main.temp_min}` + ' C';
  tempMax.innerHTML = `Max temp: ${res.main.temp_max}` + ' C';
  wind.innerHTML = `Wind speed: ${res.wind.speed}` + ' Km/h';

}
getTemp().then(console.log)
getTemp().then(domPopulator)

// take use of search btn

let searchBtn = document.querySelector('form');
console.log(searchBtn);
searchBtn.addEventListener('submit', (e) => {
  let searchValue = document.querySelector('#searchInput').value;
  e.preventDefault();
  getTemp(searchValue)
    .then(domPopulator)
    .catch((e) => {
      alert('location you entered is not valid')
      getTemp().then(domPopulator)
    })
})
