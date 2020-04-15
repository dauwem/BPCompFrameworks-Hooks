import React, { Component } from 'react';

// contexts
import CovidContext from '../contexts/CovidContext';

// components
import Title02 from '../components/Title02';
import Title03 from '../components/Title03';
import MainDropdown from '../components/MainDropdown';
import MainChart from '../components/MainChart';
import MainButton from '../components/MainButton';

// rest
import { getByCountry } from '../rest/data/CovidData';

// helpers
import { getPopulationByCountry, countViews } from '../helpers/Helper';

export default class DeadGraphContainer extends Component {
  static contextType = CovidContext;

  constructor(props) {
    super(props);
    this.state = {
      countryCode: null,
      prevCountryCode: null,
      chartData: null,
      showChart: false,
      data: [],
      axes: [
        { primary: true, type: 'utc', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      population: 0,
      count: 0
    };

    // bindings
    this.changeValueDropdown = this.changeValueDropdown.bind(this);
  }

  async componentDidUpdate(prev, current) {
    if ((current.countryCode !== current.prevCountryCode) && current.countryCode) {
      this.setState({ 
        population: await getPopulationByCountry(this.state.countryCode),
        prevCountryCode: current.countryCode
      });
    }
  }

  async changeValueDropdown(country) {
    if (country !== 'default') {
      this.setState({ count: countViews(this.state.count, 'increment') });
      let countryValues = country.split(',');
      this.setState({ countryCode: countryValues[1] });
      let deadStats = await getByCountry(countryValues[0], 'deaths');
      let tempChartData = [];
      deadStats.data.map(deadStat => {
        return tempChartData.push({ x: new Date(deadStat.Date), y: deadStat.Cases });
      });
      this.setState({
        data: [
          {
            label: 'Dead covid-19 patients',
            data: tempChartData
          }
        ],
        showChart: deadStats.data.length !== 0
      });
    }
    else this.setState({ showChart: false });
  }

  render() {
    return (
      <>
        <Title02 title="Graph dead patients" /> 
        <MainDropdown data={ this.context.countries } onChange={ this.changeValueDropdown } />
      { this.state.showChart && (
        <>
            <MainChart axes={ this.state.axes } data={ this.state.data } />
            <Title03 title="Some details..." />
            <p>In this country live { this.state.population } people</p>
            <p>You checked { this.state.count } countries</p>
            <MainButton text="Delete previous count" action={ () => this.setState({ count: countViews(this.state.count, 'decrement') }) } />
          </>
        ) 
      }
      </>
    );
  }
}