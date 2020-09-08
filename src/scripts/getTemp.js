/* eslint-disable import/prefer-default-export */
async function getIp() {
  const ip = await fetch('https://api.ipify.org/?format=json');
  const dataIp = await ip.json();
  return dataIp.ip;
}

async function getLocation(ip) {
  const location = await fetch(`https://ipapi.co/${ip}/json/`);
  const dataLocation = await location.json();
  return dataLocation.region;
}

async function getTemp(location = null, metricValue = 'Metric') {
  if (!location) {
    const ip = await getIp();
    location = await getLocation(ip);
  }
  const temp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=98f5c39a38b987172eb484d62acb0f9c&units=${metricValue}`);
  const data = await temp.json();
  return data;
}

export { getTemp };