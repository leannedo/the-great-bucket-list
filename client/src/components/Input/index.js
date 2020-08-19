// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./Input.scss";

const Input = ({ label, className, placeholder, name, onChange, value }) => {
  return (
    <div className={className}>
      {label && (
        <lable className="td-label" for={name}>
          {label.toUpperCase()}
        </lable>
      )}
      <input
        value={value}
        className="td-input"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

Input.defaultProps = {
  className: "",
  placeholder: "",
  onChange: () => {},
  name: "",
  label: "",
  value: "",
};

Input.propTypes = {
  /** element's class name */
  className: PropTypes.string,

  /** input's name handler */
  name: PropTypes.func,

  /** input's label */
  label: PropTypes.func,

  /** input's placeholder */
  placeholder: PropTypes.string,

  /** onChange handler */
  onChange: PropTypes.func,

  /** input's value */
  value: PropTypes.string,
};

export default Input;
