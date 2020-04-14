import { useEffect, useState } from 'react';

// rest
import { getPopulation } from '../../rest/data/PopulationData';

function useGetPopulation(countryCode) {
  const [population, setPopulation] = useState(0); 

  useEffect(() => {
    async function fetchPopulation() {
      if (countryCode) {
        let population = await getPopulation(countryCode);
        setPopulation(population);
      }
    }
    fetchPopulation();
  }, [countryCode]);

  return population;
}

export default useGetPopulation;