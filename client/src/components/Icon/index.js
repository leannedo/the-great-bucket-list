// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./Icon.scss";

const Icon = ({ className, name, onClick, hoverable }) => {
  return (
    <img
      src={require(`./../../assets/icons/${name}.svg`)}
      className={`td-icon ${className} ${hoverable ? "icon-hoverable" : ""}`}
      onClick={onClick}
    />
  );
};

Icon.defaultProps = {
  className: "",
  name: "unknown",
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
