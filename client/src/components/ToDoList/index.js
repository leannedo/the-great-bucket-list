// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styling
import "./ToDoList.scss";

const ToDoList = ({ className }) => {
  return <div className={className}>ToDoList</div>;
};

ToDoList.defaultProps = {
  className: "",
};

ToDoList.propTypes = {
  className: PropTypes.string,
};

export default ToDoList;
