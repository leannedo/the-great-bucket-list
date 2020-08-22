// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./Backdrop.scss";

const Backdrop = ({ className, closeModalHandler }) => {
  return (
    <div onClick={closeModalHandler} className={`td-backdrop ${className}`} />
  );
};

Backdrop.defaultProps = {
  className: "",
  onClick: () => {},
};

Backdrop.propTypes = {
  /** component's classname*/
  className: PropTypes.string,

  /** onClick handler*/
  onClick: PropTypes.func,
};

export default Backdrop;
