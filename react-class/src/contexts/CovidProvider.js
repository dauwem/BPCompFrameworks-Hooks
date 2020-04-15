import React, { Component } from 'react';

// contexts
import CovidContext from './CovidContext';

export default class CovidProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: null,
      setCountries: this.setCountries.bind(this)
    }
  }

  setCountries(countries) {
    this.setState({ countries });
  }

  render() {
    return (
      <CovidContext.Provider value={ this.state }>
        { this.props.children }
      </CovidContext.Provider>
    );
  }
}