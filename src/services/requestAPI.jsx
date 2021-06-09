const headers = new Headers();
headers.append("X-CSCAPI-KEY", `MlNERzFKOVQ3VUVid2p6STdWYjY2dFVicmxJRUZpOWhpcVlERmtNQg==`);

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

export async function requestCountry(input) {
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${input}`, requestOptions);
  const country = await response.json();
  return console.log(country);
}

export async function requestStateByCountry(input) {
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${input}/states`, requestOptions);
  const state = await response.json();
  return console.log(state);
}

export async function requestCity(input1, input2) {
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${input1}/states/${input2}/cities`,
     requestOptions);
  const city = await response.json();
  return console.log(city);
}


