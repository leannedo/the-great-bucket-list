// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import './index.scss';

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const Layout = ({ children }) => <div>{children}</div>;

Layout.propTypes = {
  /** component's children props */
  children: PropTypes.node,
};

export default Layout;
