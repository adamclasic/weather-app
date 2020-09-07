import 'bootstrap';
import './styles/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

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

// let ip = '';
// let location = '';

// async function getTemp

// getLocation(getIp().then((res) => res)).then(console.log);
// let display = '';
getTemp('New York').then((res) => {console.log(res)})
// document.querySelector('.d-flex').innerHTML = display;