import React from 'react';
import ReactDOM from 'react-dom';

// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/Users/ngocdo/side... Remove this comment to see the full error message
import App from './App';

import './styles/variables.scss';

import { initiateAxiosConfig } from './axiosConfigs';

initiateAxiosConfig();

ReactDOM.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
