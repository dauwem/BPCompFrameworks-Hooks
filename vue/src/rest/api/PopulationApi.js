import axios from "axios";

export default axios.create({
  baseURL: "https://countries-cities.p.rapidapi.com/location/country",
  headers: {
    "X-RapidAPI-Host": "countries-cities.p.rapidapi.com",
    "x-rapidapi-key": "d6fa298845mshed68005e79a9571p17ff78jsn5f1d7584a412"
  }
});
