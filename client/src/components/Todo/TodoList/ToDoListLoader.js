// Libaries
import React from "react";
import PropTypes from "prop-types";

// Components
import ToDoItemLoader from "./ToDoItem/ToDoItemLoader";

const ToDoListLoader = ({ count }) => (
  <div className="todo-list-loader">
    {Array.from(Array(count), (_, i) => (
      <ToDoItemLoader key={i} width="100%" />
    ))}
  </div>
);

ToDoListLoader.defaultProps = {
  count: 5,
};

ToDoListLoader.propTypes = {
  /** number of loader items to be rendered in list */
  count: PropTypes.number,
};

export default ToDoListLoader;
