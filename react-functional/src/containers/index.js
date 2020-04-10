import React, { useEffect, useContext } from 'react';
import { Router, Redirect } from '@reach/router';

// components
import Header from '../components/Header';

// containers
import MainContainer from '../containers/MainContainer';
import ConfirmedGraphContainer from '../containers/ConfirmedGraphContainer';
import CuredGraphContainer from '../containers/CuredGraphContainer';

// rest
import { getCountries } from '../rest/data/covidData';

// contexts
import { CovidContext } from '../contexts/CovidProvider';

function Index() {
  const covidContext = useContext(CovidContext);

  useEffect(() => {
    if (!covidContext.countries) {
      async function getCountriesAsync() {
        let countries = await getCountries();
        covidContext.setCountries(countries);
      }
      getCountriesAsync();
    }
  }, [covidContext]);

  return (
    <>
      <Header />
      <MainContainer>
        <Router>
          <Redirect noThrow from="/" to="/confirmed" />
          <ConfirmedGraphContainer default path="/confirmed" />
          <CuredGraphContainer path="/cured" />
        </Router>
      </MainContainer>
    </>
  );
}

export default Index;