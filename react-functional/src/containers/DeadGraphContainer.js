import React, { useContext, useCallback, useMemo, useState }  from 'react';

// components
import Title02 from '../components/Title02';
import MainDropdown from '../components/MainDropdown';
import MainChart from '../components/MainChart';

// contexts
import { CovidContext } from '../contexts/CovidProvider';

// rest
import { getByCountry } from '../rest/data/covidData';

function DeadGraphContainer() {
  const covidContext = useContext(CovidContext);
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState(null);

  const changeValueDropdown = useCallback(async (country) => {
    if (country !== 'default') {
      // Custom hook or useReducer
      let deadStats = await getByCountry(country, 'deaths');
      let tempChartData = [];
      deadStats.data.map(deadStat => {
        return tempChartData.push({ x: new Date(deadStat.Date), y: deadStat.Cases });
      });
      setChartData(tempChartData);
      setShowChart(true);
    }
    else setShowChart(false);
  }, []);

  const data = useMemo(() => [
    {
      label: 'Dead covid-19 patients',
      data: chartData
    }
  ], [chartData]);

  const axes = useMemo(() => [
    { primary: true, type: 'utc', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ], []);
  return (
    <>
      <Title02 title="Graph dead patients" /> 
      <MainDropdown data={ covidContext.countries } onChange={ changeValueDropdown } />
      { (showChart && chartData) && <MainChart axes={ axes } data={ data } /> }
    </>
  ); 
}

export default DeadGraphContainer;