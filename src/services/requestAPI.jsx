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
