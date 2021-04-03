// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import ContentLoader from 'react-content-loader';

const ToDoItemLoader = ({ width, height }) => (
  <ContentLoader
    speed={2}
    width={width}
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    height={height}
    viewBox="0 0 768 23"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ marginBottom: '20px' }}
  >
    <circle cx="10" cy="10" r="10" />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <rect x="34" y="0" rx="0" ry="0" width="20" height="20" />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <rect x="79" y="1" rx="0" ry="0" width="90%" height="19" />
  </ContentLoader>
);

ToDoItemLoader.defaultProps = {
  width: 768,
  height: 25,
};

ToDoItemLoader.propTypes = {
  /** loader's width */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** loader's height */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ToDoItemLoader;
