import React, { Component } from 'react';

// contexts
import CovidContext from '../contexts/CovidContext';

// components
import Title02 from '../components/Title02';
import MainDropdown from '../components/MainDropdown';
import MainChart from '../components/MainChart';

// rest
import { getByCountry } from '../rest/data/CovidData';

export default class ConfirmedGraphContainer extends Component {
  static contextType = CovidContext;

  constructor(props) {
    super(props);
    this.state = {
      countryCode: null,
      chartData: null,
      showChart: false,
      data: [],
      axes: [
        { primary: true, type: 'utc', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ]
    };

    // bindings
    this.changeValueDropdown = this.changeValueDropdown.bind(this);
  }

  componentDidMount() {
    console.log('wow');
  }

  async changeValueDropdown(country) {
    if (country !== 'default') {
      let countryValues = country.split(',');
      this.setState({ countryCode: countryValues[1] });
      let confirmedStats = await getByCountry(countryValues[0], 'confirmed');
      let tempChartData = [];
      confirmedStats.data.map(confirmedStat => {
        return tempChartData.push({ x: new Date(confirmedStat.Date), y: confirmedStat.Cases });
      });
      this.setState({
        data: [
          {
            label: 'Confirmed covid-19 patients',
            data: tempChartData
          }
        ],
        showChart: true
      });
    }
    else this.setState({ showChart: false });
  }

  render() {
    return (
      <>
        <Title02 title="Graph confirmed patients" /> 
        <MainDropdown data={ this.context.countries } onChange={ this.changeValueDropdown } />
      { this.state.showChart && (
        <>
            <MainChart axes={ this.state.axes } data={ this.state.data } />
            {/* <Title03 title="Some details..." />
            <p>In this country live { population } people</p>
            <p>You checked { state === undefined ? '...' : state.count } countries</p>
            <MainButton text="Delete previous count" action={ () => dispatch({ type: 'decrement' }) } /> */}
          </>
        ) 
      }
      </>
    );
  }
}