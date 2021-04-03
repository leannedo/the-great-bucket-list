// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import './Icon.scss';

const Icon = ({ className, path, onClick, hoverable }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <img
    src={path}
    className={`td-icon ${className} ${hoverable ? 'icon-hoverable' : ''}`}
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
