import React, { useContext, useCallback, useMemo, useState } from 'react';

// css
import '../assets/css/containers/ConfirmedGraphContainer.scss';

// components
import Title02 from '../components/Title02';
import MainDropdown from '../components/MainDropdown';
import { Chart } from 'react-charts';

// contexts
import { CovidContext } from '../contexts/CovidProvider';

// rest
import { getByCountry } from '../rest/data/covidData';

function ConfirmedGraphContainer() {
  const covidContext = useContext(CovidContext);
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState(null);

  const changeValueDropdown = useCallback(async (country) => {
    if (country !== 'default') {
      let confirmedStats = await getByCountry(country, 'confirmed');
      let tempChartData = [];
      confirmedStats.data.map(confirmedStat => {
        //return tempChartData.push([confirmedStat.Cases, confirmedStat.Date]);
        return tempChartData.push({ x: new Date(confirmedStat.Date), y: confirmedStat.Cases });
      });
      setChartData(tempChartData);
      setShowChart(true);
    }
    else setShowChart(false);
  }, []);

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
      <div className="ConfirmedGraphContainer__Chart">
        {
          (showChart && chartData) && <Chart data={ data } axes={ axes }  tooltip/>
        }
      </div>
    </>
  );
}

export default ConfirmedGraphContainer;