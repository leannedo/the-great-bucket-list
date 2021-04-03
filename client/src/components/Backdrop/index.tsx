// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styling
import './Backdrop.scss';

const Backdrop = ({ className, closeModalHandler }) => (
  <div onClick={closeModalHandler} className={`td-backdrop ${className}`} />
);

Backdrop.defaultProps = {
  className: '',
  closeModalHandler: () => {},
};

Backdrop.propTypes = {
  /** component's classname */
  className: PropTypes.string,

  /** close modal triggered by backdrop click */
  closeModalHandler: PropTypes.func,
};

export default Backdrop;
