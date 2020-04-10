import API from '../Api';

export async function getCountries() {
  return await API.get('/countries')
    .then(res => {
      return res;
    });
}