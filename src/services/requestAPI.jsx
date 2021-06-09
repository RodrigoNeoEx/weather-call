const headers = new Headers();
headers.append("X-CSCAPI-KEY", `MlNERzFKOVQ3VUVid2p6STdWYjY2dFVicmxJRUZpOWhpcVlERmtNQg==`);

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

export async function fetchCountryAPI(input) {
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${input}`, requestOptions);
  const country = await response.json();
  return country;
}

export async function fetchStateByCountryAPI(input) {
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${input}/states`, requestOptions);
  const stateName = await response.json();
  return stateName;
}

export async function fetchCityAPI(input1, input2) {
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${input1}/states/${input2}/cities`,
     requestOptions);
  const city = await response.json();
  return console.log(city);
}


