// Libraries
import React from "react";
import PropTypes from "prop-types";

// Component
import ToDoItem from "./ToDoItem";
import ToDoListLoader from "./ToDoListLoader";

// Styling
import "./ToDoList.scss";

// Hooks
import { useTodo } from "../../../modules/todo/contexts/TodoContext";
import { useCategory } from "../../../modules/category/contexts/CategoryContext";

const ToDoList = ({ className }) => {
  const { filteredTodos, todosFetchStatus } = useTodo();
  const { getCategoryById } = useCategory();

  return (
    <div className={`td-todo-list-wrapper ${className}`}>
      {todosFetchStatus === "fetching" ? (
        <ToDoListLoader count={6} />
      ) : (
        <>
          {filteredTodos.map((el, id) => {
            const category = getCategoryById(el.categoryId);
            return (
              <ToDoItem
                key={id}
                {...el}
                colorIndicator={category.colorIndicator}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

ToDoList.defaultProps = {
  className: "",
};

ToDoList.propTypes = {
  /** component's default class name */
  className: PropTypes.string,
};

export default ToDoList;
