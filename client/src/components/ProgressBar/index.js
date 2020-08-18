// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./ProgressBar.scss";

const ProgressBar = ({ className }) => {
  return <div className={className}>Progress Bar</div>;
};

ProgressBar.defaultProps = {
  className: "",
};

ProgressBar.propTypes = {
  className: PropTypes.string,
};

export default ProgressBar;
