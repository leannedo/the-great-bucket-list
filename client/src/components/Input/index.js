// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./Input.scss";

const Input = ({ className }) => {
  return <div className={className}>Input</div>;
};

Input.defaultProps = {
  className: "",
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
