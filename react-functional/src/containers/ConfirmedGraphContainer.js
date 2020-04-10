import React, { useContext, useCallback, useMemo, useState } from 'react';

// css
import '../assets/css/containers/ConfirmedGraphContainer.scss';

// components
import Title02 from '../components/Title02';
import MainDropdown from '../components/MainDropdown';
import { Chart } from 'react-charts';

// contexts
import { CovidContext } from '../contexts/CovidProvider';

function ConfirmedGraphContainer() {
  const covidContext = useContext(CovidContext);
  const [showChart, setShowChart] = useState(true);

  const changeValueDropdown = useCallback((value) => {
    console.log(value);
  }, []);

  const data = useMemo(() => [
    {
      label: 'Series 1',
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    },
    {
      label: 'Series 2',
      data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    }
  ], []);

  const axes = useMemo(() => [
    { primary: true, type: 'linear', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ], []);

  return (
    <>
      <Title02 title="Graph confirmed patients" /> 
      <MainDropdown data={ covidContext.countries } onChange={ changeValueDropdown } />
      <div className="ConfirmedGraphContainer__Chart">
        {
          showChart && <Chart data={ data } axes={ axes } />
        }
      </div>
    </>
  );
}

export default ConfirmedGraphContainer;