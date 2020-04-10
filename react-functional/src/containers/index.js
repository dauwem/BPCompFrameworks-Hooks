import React from 'react';
import { Router, Redirect } from '@reach/router';

// components
import Header from '../components/Header';

// containers
import ConfirmedGraphContainer from '../containers/ConfirmedGraphContainer';
import CuredGraphContainer from '../containers/CuredGraphContainer';

function index() {
  return (
    <>
      <Header />
      <Router>
        <Redirect noThrow from="/" to="/confirmed" />
        <ConfirmedGraphContainer default path="/confirmed" />
        <CuredGraphContainer path="/cured" />
      </Router>
    </>
  );
}

export default index;