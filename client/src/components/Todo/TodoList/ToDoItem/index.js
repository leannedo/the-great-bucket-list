// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Component
import Icon from "../../../Icon";

// Styling
import "./ToDoItem.scss";

// Hooks
import { useModal } from "../../../../modules/modal/contexts/ModalContext";
import { useTodo } from "../../../../modules/todo/contexts/TodoContext";

const ToDoItem = ({ className, content, id, colorIndicator, completed }) => {
  const { confirmModal, showModal, closeModal } = useModal();
  const { deleteTodo, toggleCompleteTodo } = useTodo();

  /** Initialize hover state for icon */
  const [isHover, setIsHover] = useState(false);

  /**
   * Delete todo and close modal
   * @param {string} id
   */
  const deleteTodoHandler = (id) => {
    deleteTodo(id);
    closeModal({ key: confirmModal.key });
  };

  /**
   * Toggle completed state of todo
   * @param {string} id
   */
  const completeTodo = (id) => {
    toggleCompleteTodo(id);
  };

  return (
    <div
      className={`td-todo-item-wrapper ${className}`}
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
    >
      <input
        type="checkbox"
        id={id}
        className="td-todo-item-input-checkbox"
        checked={completed}
      />
      <span className="checked" onClick={() => completeTodo(id)} />
      <span
        style={{ backgroundColor: `${colorIndicator}` }}
        className="td-todo-item-color-indicator"
      />
      <label htmlFor={id} className="td-todo-item-text">
        {content}
      </label>
      <div
        style={{
          opacity: isHover ? "1" : "0",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Icon
          onClick={() =>
            showModal({
              key: confirmModal.key,
              props: {
                okText: "Delete this task?",
                cancelText: "Cancel",
                okHandler: () => {
                  deleteTodoHandler(id);
                },
              },
            })
          }
          className="td-todo-icon"
          name="trash-solid"
        />
      </div>
    </div>
  );
};

ToDoItem.defaultProps = {
  className: "",
  colorIndicator: "",
  content: "",
  id: "",
  completed: false,
};

ToDoItem.propTypes = {
  /** component's default classname */
  className: PropTypes.string,

  /** todo's content passed down to label */
  content: PropTypes.string,

  /** todo's colorIndicator passed down to color box */
  colorIndicator: PropTypes.string,

  /** todo's id passed down to id */
  id: PropTypes.string,

  /** todo's complete state passed down to input's checkbox */
  completed: PropTypes.bool,
};

export default ToDoItem;
