import React, { Component } from 'react';
import { Chart } from 'react-charts';

// css
import '../assets/css/components/MainChart.scss';

export default class MainChart extends Component {
  render() {
    return (
      <div className="MainChart">
        <Chart data={ this.props.data } axes={ this.props.axes } tooltip/>
      </div>
    );
  }
}