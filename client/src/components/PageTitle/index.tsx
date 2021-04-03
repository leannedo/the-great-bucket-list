// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import './PageTitle.scss';

const PageTitle = ({ title, className }) => (
  <div className={className}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <h1>{title}</h1>
  </div>
);

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
PageTitle.defaultProps = {
  title: '',
  className: '',
};

PageTitle.propTypes = {
  /** component's classname */
  className: PropTypes.string,

  /** page's title */
  title: PropTypes.string,
};

export default PageTitle;
