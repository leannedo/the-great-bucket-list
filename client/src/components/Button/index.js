// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./Button.scss";

const Button = ({ className, block, type, onClick, children }) => {
  return (
    <button
      className={`td-btn ${className} btn-${type} ${block ? "btn-block" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  block: false,
  type: "primary",
  onClick: () => {},
};

Button.propTypes = {
  /** element's class name */
  className: PropTypes.string,

  /** option to fit button width to its parent width */
  block: PropTypes.bool,

  /** button variant, eg. "primary", "text", "icon", etc */
  type: PropTypes.string,

  /** onClick handler */
  onClick: PropTypes.func,

  /** button content */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Button;
