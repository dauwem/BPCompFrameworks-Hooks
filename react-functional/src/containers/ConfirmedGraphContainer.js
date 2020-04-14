import React, { useContext, useCallback, useMemo, useState, useReducer } from 'react';

// components
import Title02 from '../components/Title02';
import Title03 from '../components/Title03';
import MainDropdown from '../components/MainDropdown';
import MainChart from '../components/MainChart';
import MainButton from '../components/MainButton';

// contexts
import { CovidContext } from '../contexts/CovidProvider';

// rest
import { getByCountry } from '../rest/data/CovidData';

// hooks - reducers
import { countReducer } from '../hooks/Reducers';

// hooks - custom
import useGetpopulation from '../hooks/customs/useGetPopulation';

function ConfirmedGraphContainer() {
  const covidContext = useContext(CovidContext);
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const population = useGetpopulation(countryCode);

  const changeValueDropdown = useCallback(async country => {
    if (country !== 'default') {
      dispatch({ type: 'increment' });
      let countryValues = country.split(',');
      setCountryCode(countryValues[1]);
      let confirmedStats = await getByCountry(countryValues[0], 'confirmed');
      let tempChartData = [];
      confirmedStats.data.map(confirmedStat => {
        return tempChartData.push({ x: new Date(confirmedStat.Date), y: confirmedStat.Cases });
      });
      setChartData(tempChartData);
      setShowChart(confirmedStats.data.length !== 0);
    }
    else setShowChart(false);
  }, []);

  /* Data used by chart */
  const data = useMemo(() => [
    {
      label: 'Confirmed covid-19 patients',
      data: chartData
    }
  ], [chartData]);

  const axes = useMemo(() => [
    { primary: true, type: 'utc', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ], []);

  return (
    <>
      <Title02 title="Graph confirmed patients" /> 
      <MainDropdown data={ covidContext.countries } onChange={ changeValueDropdown } />
      { (showChart && chartData) && (
        <>
            <MainChart axes={ axes } data={ data } />
            <Title03 title="Some details..." />
            <p>In this country live { population } people</p>
            <p>You checked { state === undefined ? '...' : state.count } countries</p>
            <MainButton text="Delete previous count" action={ () => dispatch({ type: 'decrement' }) } />
          </>
        ) 
      }
    </>
  );
}

export default ConfirmedGraphContainer;