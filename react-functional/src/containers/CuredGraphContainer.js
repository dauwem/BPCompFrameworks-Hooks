import React, { useContext, useCallback, useMemo, useState }  from 'react';

// components
import Title02 from '../components/Title02';
import MainDropdown from '../components/MainDropdown';
import MainChart from '../components/MainChart';

// contexts
import { CovidContext } from '../contexts/CovidProvider';

// rest
import { getByCountry } from '../rest/data/CovidData';

function CuredGraphContainer() {
  const covidContext = useContext(CovidContext);
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState(null);

  const changeValueDropdown = useCallback(async (country) => {
    if (country !== 'default') {
      // Custom hook or useReducer
      let curedStats = await getByCountry(country, 'recovered');
      let tempChartData = [];
      curedStats.data.map(curedStat => {
        return tempChartData.push({ x: new Date(curedStat.Date), y: curedStat.Cases });
      });
      setChartData(tempChartData);
      setShowChart(true);
    }
    else setShowChart(false);
  }, []);

  const data = useMemo(() => [
    {
      label: 'Recovered covid-19 patients',
      data: chartData
    }
  ], [chartData]);

  const axes = useMemo(() => [
    { primary: true, type: 'utc', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ], []);
  return (
    <>
      <Title02 title="Graph recovered patients" /> 
      <MainDropdown data={ covidContext.countries } onChange={ changeValueDropdown } />
      { (showChart && chartData) && <MainChart axes={ axes } data={ data } /> }
    </>
  ); 
}

export default CuredGraphContainer;