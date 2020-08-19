// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./Modal.scss";
import Backdrop from "../Backdrop";

const Modal = ({ className, children }) => {
  return (
    <div className={`td-modal-wrapper ${className}`}>
      <div className="td-modal">{children}</div>
      <Backdrop />
    </div>
  );
};

Modal.defaultProps = {
  className: "",
};

Modal.propTypes = {
  /** component's classname */
  className: PropTypes.string,

  /** component's children */
  children: PropTypes.node,
};

export default Modal;
