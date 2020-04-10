import React, { useContext, useCallback } from 'react';

// components
import Title02 from '../components/Title02';
import MainDropdown from '../components/MainDropdown';

// contexts
import { CovidContext } from '../contexts/CovidProvider';

function ConfirmedGraphContainer() {
  const covidContext = useContext(CovidContext);

  const changeValueDropdown = useCallback((value) => {
    console.log(value);
  }, []);

  return (
    <>
      <Title02 title="Graph confirmed patients" /> 
      <MainDropdown data={ covidContext.countries } onChange={ changeValueDropdown } />
      <p>This is the confirmed graph container!</p>
    </>
  );
}

export default ConfirmedGraphContainer;