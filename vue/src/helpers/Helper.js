// rest
import { getPopulation } from "@/rest/data/PopulationData";

export async function getPopulationByCountry(countryCode) {
  return await getPopulation(countryCode);
}

export function countViews(count, action) {
  if (action === "increment") {
    count++;
  } else if (action === "decrement" && count !== 0) {
    count--;
  }
  return count;
}
