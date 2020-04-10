import React from 'react';
import { Chart } from 'react-charts';

// css
import '../assets/css/components/MainChart.scss';

function MainChart(props) {
  return (
    <div className="MainChart">
      <Chart data={ props.data } axes={ props.axes } tooltip/>
    </div>
  );
}

export default MainChart;