// @flow
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/app/';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);