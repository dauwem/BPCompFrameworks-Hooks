import React, { Component } from 'react';
import { Chart } from 'react-charts';

// css
import '../assets/css/components/MainChart.scss';

export default class MainChart extends Component {
  render() {
    console.log(this.props.data);
    console.log(this.props.axes);
    return (
      <div className="MainChart">
        <Chart data={ this.props.data } axes={ this.props.axes } tooltip/>
      </div>
    );
  }
}