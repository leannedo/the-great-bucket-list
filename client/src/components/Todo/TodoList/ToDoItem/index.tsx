// Libraries
import React, { useState } from 'react';

// Styling
import './ToDoItem.scss';

// Hooks
import { useModal } from '../../../../modules/modal/contexts/ModalContext';
import { useTodo } from '../../../../modules/todo/contexts/TodoContext';

interface ITodoItemProps {
  className?: string;
  name: string;
  id: string;
  colorIndicator: string;
  completed: boolean;
}

const ToDoItem = ({
  className,
  name,
  id,
  colorIndicator,
  completed = false,
}: ITodoItemProps): JSX.Element => {
  const { confirmModal, showModal, closeModal } = useModal();
  const { deleteTodoItem, toggleCompleteTodo } = useTodo();

  /** Initialize hover state for icon */
  const [isHover, setIsHover] = useState(false);

  /**
   * Delete todo and close modal
   * @param {string} id
   */
  const deleteTodoHandler = (id) => {
    deleteTodoItem(id);
    closeModal({ key: confirmModal.key });
  };

  /**
   * Toggle completed state of todo
   * @param {string} id
   */
  const toggleCompletedState = (id) => {
    const updatedCompletedState = !completed;
    toggleCompleteTodo({ id, completed: updatedCompletedState });
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
        onChange={() => toggleCompletedState(id)}
      />
      <span className="checked" onClick={() => toggleCompletedState(id)} />
      <span
        style={{ backgroundColor: `${colorIndicator}` }}
        className="td-todo-item-color-indicator"
      />
      <label htmlFor={id} className="td-todo-item-text">
        {name}
      </label>
      <div
        style={{
          opacity: isHover ? '1' : '0',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <i
          className="fas fa-trash td-todo-icon"
          onClick={() =>
            showModal({
              key: confirmModal.key,
              props: {
                okText: 'Delete this task?',
                cancelText: 'Cancel',
                okHandler: () => {
                  deleteTodoHandler(id);
                },
              },
            })}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
