const weatherKey = '87fae4dd5dd34ace8d7145623211506';

const headers = new Headers();
headers.append("X-CSCAPI-KEY", `MlNERzFKOVQ3VUVid2p6STdWYjY2dFVicmxJRUZpOWhpcVlERmtNQg==`);

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

export async function fetchCountryAPI(countryName) {
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryName}`, requestOptions);
  const country = await response.json();
  return country;
};

export async function fetchStateByCountryAPI(stateName) {
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${stateName}/states`, requestOptions);
  const states= await response.json();
  return states;
};

export async function fetchCityAPI(countryName, stateName) {
  console.log(countryName, stateName)
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${countryName}/states/${stateName}/cities`,
     requestOptions);
  const city = await response.json();
  return city;
};

export async function fetchWeatherAPI(selectedCity) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${selectedCity}&aqi=no`);
  const weather = await response.json();
  return weather;
};
