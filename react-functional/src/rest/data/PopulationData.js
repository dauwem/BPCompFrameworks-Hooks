import PopulationApi from '../api/PopulationApi';

export async function getPopulation(code) {
  return await PopulationApi.get(`/${ code }`)
    .then(res => {
      return res.data.population;
    });
}