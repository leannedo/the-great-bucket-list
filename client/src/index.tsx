import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/variables.scss';

import { initiateAxiosConfig } from './axiosConfigs';

initiateAxiosConfig();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
