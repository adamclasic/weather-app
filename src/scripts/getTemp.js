/* eslint-disable import/prefer-default-export */
const getIp = async () => {
  try {
    const ip = await fetch('https://api.ipify.org/?format=json');
    const dataIp = await ip.json();
    return dataIp.ip;
  } catch (e) {
    document.querySelector('.weather-box').innerHTML = 'error retriving your Ip address. check your internet connection';
    return e;
  }
};

const getLocation = async (ip) => {
  try {
    const location = await fetch(`https://ipapi.co/${ip}/json/`);
    const dataLocation = await location.json();
    return dataLocation.region;
  } catch (e) {
    document.querySelector('.weather-box').innerHTML = 'error retriving your Location. try searching your location Manually';
    return e;
  }
};

const getTemp = async (location = null, metricValue = 'Metric') => {
  if (location === null) {
    const ip = await getIp();
    location = await getLocation(ip);
    location.trim();
  }
  try {
    const temp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=98f5c39a38b987172eb484d62acb0f9c&units=${metricValue}`);
    const data = await temp.json();
    return data;
  } catch (e) {
    document.querySelector('.alert').classList.add('show');
    setTimeout(() => {
      document.querySelector('.alert').classList.remove('show');
    }, 3000);
    document.querySelector('#searchInput').value = '';
    return e;
  }
};

export { getTemp };