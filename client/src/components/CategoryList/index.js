// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./CategoryList.scss";

const CategoryList = ({ className }) => {
  return <div className={className}>CategoryList</div>;
};

CategoryList.defaultProps = {
  className: "",
};

CategoryList.propTypes = {
  className: PropTypes.string,
};

export default CategoryList;
