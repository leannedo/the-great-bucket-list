// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./FilterBar.scss";

const FilterBar = ({ className }) => {
  return <div className={className}>FilterBar</div>;
};

FilterBar.defaultProps = {
  className: "",
};

FilterBar.propTypes = {
  className: PropTypes.string,
};

export default FilterBar;
