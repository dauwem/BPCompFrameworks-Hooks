import CovidAPI from "../api/CovidApi";

export async function getCountries() {
  return await CovidAPI.get("/countries").then(res => {
    return res.data;
  });
}

export async function getByCountry(country, status) {
  return await CovidAPI.get(`/country/${country}/status/${status}`).then(
    res => {
      return res;
    }
  );
}
