import React, { Component } from 'react';
import { Router, Redirect } from '@reach/router';

// components
import Header from '../components/Header';

// containers
import MainContainer from './MainContainer';
import ConfirmedGraphContainer from '../containers/ConfirmedGraphContainer';
import CuredGraphContainer from '../containers/CuredGraphContainer';
import DeadGraphContainer from '../containers/DeadGraphContainer';

// rest
import { getCountries } from '../rest/data/CovidData';

// contexts
import CovidContext from '../contexts/CovidContext';

export default class Index extends Component {
  static contextType = CovidContext;

  async componentDidMount() {
    if (!this.context.countries) {
      this.context.setCountries(await getCountries());
    }
  }

  render() {
    return (
      <>
        <Header />
        <MainContainer>
          <Router>
            <Redirect noThrow from="/" to="/confirmed" />
            <ConfirmedGraphContainer default path="/confirmed" />
            <CuredGraphContainer path="/cured" />
            <DeadGraphContainer path="/dead" />
          </Router>
        </MainContainer>
      </>
    );
  }
}