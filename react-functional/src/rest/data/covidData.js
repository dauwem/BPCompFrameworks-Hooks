import API from '../Api';

export async function getCountries() {
  return await API.get('/countries')
    .then(res => {
      return res;
    });
}

export async function getByCountry(country, status) {
  return await API.get(`/country/${ country }/status/${ status }`)
    .then(res => {
      return res;
    });
}