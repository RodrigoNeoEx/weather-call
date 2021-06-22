const headersCSC = new Headers();
headersCSC.append("X-CSCAPI-KEY", `MlNERzFKOVQ3VUVid2p6STdWYjY2dFVicmxJRUZpOWhpcVlERmtNQg==`);

const requestCSCOptions = {
  method: 'GET',
  headers: headersCSC,
  redirect: 'follow',
};

const headersWeather = new Headers();
headersWeather.append("x-rapidapi-key", `72471c1f29msh58117e816879b7fp14c013jsn2baf844692df`);
headersWeather.append("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");

const requestWeatherOptions = {
  method: 'GET',
  headers: headersWeather,
  redirect: 'follow',
};

export async function fetchCountryAPI(countryName) {
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${countryName}`,
    requestCSCOptions);
  const country = await response.json();
  return country;
};

export async function fetchStateByCountryAPI(stateName) {
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${stateName}/states`,
    requestCSCOptions);
  const states= await response.json();
  return states;
};

export async function fetchCityAPI(countryName, stateName) {
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${countryName}/states/${stateName}/cities`,
    requestCSCOptions);
  const city = await response.json();
  return city;
};

export async function fetchWeatherAPI(selectedCity, selectedCountry ) {
  const response = await fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${selectedCity}%2C%20${selectedCountry}`,
    requestWeatherOptions);
  const weather = await response.json();
  return weather;
};
