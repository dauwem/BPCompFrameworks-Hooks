import CovidAPI from '../api/CovidApi';

export async function getCountries() {
  return await CovidAPI.get('/countries')
    .then(res => {
      return res;
    });
}

export async function getByCountry(country, status) {
  return await CovidAPI.get(`/country/${ country }/status/${ status }`)
    .then(res => {
      return res;
    });
}