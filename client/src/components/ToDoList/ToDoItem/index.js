// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Styling
import "./ToDoItem.scss";

const ToDoItem = ({ className, content, id, colorIndicator }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={`td-todo-item-wrapper ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="td-todo-item-input-checkbox"
        checked={checked}
      />
      <span className="checked" onClick={() => setChecked(!checked)} />
      <span
        style={{ backgroundColor: `${colorIndicator}` }}
        className="td-todo-item-color-indicator"
      />
      <label htmlFor={id} className="td-todo-item-text">
        {content}
      </label>
    </div>
  );
};

ToDoItem.defaultProps = {
  className: "",
  content: "",
  colorIndicator: "",
};

ToDoItem.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  colorIndicator: PropTypes.string,
};

export default ToDoItem;
