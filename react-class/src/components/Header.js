import React, { Component } from 'react';
import { Link } from '@reach/router';

// css
import '../assets/css/components/Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <Link to="confirmed">COVID-19</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/confirmed">Confirmed</Link>
            </li>
            <li>
              <Link to="/cured">Cured</Link>
            </li>
            <li>
              <Link to="/dead">Dead</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}