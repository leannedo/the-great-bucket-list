// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import './Icon.scss';

const Icon = ({ className, path, onClick, hoverable }) => (
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'path' does not exist on type 'Props'.
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <img
    src={path}
    className={`td-icon ${className} ${hoverable ? 'icon-hoverable' : ''}`}
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    onClick={onClick}
    alt="icon"
  />
);

Icon.defaultProps = {
  className: '',
  name: 'unknown',
  onClick: () => {},
};

Icon.propTypes = {
  /** element's class name */
  className: PropTypes.string,

  /** icon's name in ./assets */
  name: PropTypes.string,

  /** onClick handler */
  onClick: PropTypes.func,

  /** option to display hover state */
  hoverable: PropTypes.bool,
};

export default Icon;
