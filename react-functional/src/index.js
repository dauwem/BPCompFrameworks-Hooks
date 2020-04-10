import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// css
import './index.css';

// containers
import Containers from './containers';

// contexts
import { CovidProvider } from './contexts/CovidProvider';

ReactDOM.render(
  <CovidProvider>
    <Containers />
  </CovidProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
