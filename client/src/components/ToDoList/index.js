// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Component
import ToDoItem from "./ToDoItem";

// Styling
import "./ToDoList.scss";

// Data
import todoData from "./todo-data";

const ToDoList = ({ className }) => {
  const [todo, setTodo] = useState(todoData);

  return (
    <div className={`td-todo-list-wrapper ${className}`}>
      {todo.map((el, id) => (
        <ToDoItem key={id} {...el} colorIndicator="#ffab38" />
      ))}
    </div>
  );
};

ToDoList.defaultProps = {
  className: "",
};

ToDoList.propTypes = {
  className: PropTypes.string,
};

export default ToDoList;
