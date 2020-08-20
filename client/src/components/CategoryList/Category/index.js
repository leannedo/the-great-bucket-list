// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Styling
import "./Category.scss";

const Category = ({ className, name, colorIndicator }) => {
  const [isHover, setIsHover] = useState(false);

  const style = { boxShadow: `inset 7px 0 0 ${colorIndicator}` };

  const hoverStyle = {
    backgroundColor: `${colorIndicator}`,
    color: "var(--td-white-color)",
  };

  const toggleHoverHandler = () => {
    setIsHover((isHover) => !isHover);
  };

  return (
    <div
      className={`td-category ${className}`}
      onMouseEnter={toggleHoverHandler}
      onMouseLeave={toggleHoverHandler}
      style={isHover ? hoverStyle : style}
    >
      {name}
    </div>
  );
};

Category.defaultProps = {
  className: "",
  name: "",
  colorIndicator: "",
};

Category.propTypes = {
  /** element's class name */
  className: PropTypes.string,

  /** category's name */
  name: PropTypes.string,

  /** category's color indicator */
  colorIndicator: PropTypes.string,
};

export default Category;
