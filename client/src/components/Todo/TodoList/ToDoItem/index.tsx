// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styling
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../../modules/modal/contexts/ModalCo... Remove this comment to see the full error message
import './ToDoItem.scss';

// Hooks
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../../modules/todo/contexts/TodoCont... Remove this comment to see the full error message
import { useModal } from '../../../../modules/modal/contexts/ModalContext';
import { useTodo } from '../../../../modules/todo/contexts/TodoContext';

const ToDoItem = ({ className, name, id, colorIndicator, completed }) => {
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
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
   * Toggle completed state of todo
   * @param {string} id
   */
  const toggleCompletedState = (id) => {
    const updatedCompletedState = !completed;
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
    toggleCompleteTodo({ id, completed: updatedCompletedState });
  };

  return (
    <div
      className={`td-todo-item-wrapper ${className}`}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
    >
      <input
        type="checkbox"
        id={id}
        className="td-todo-item-input-checkbox"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        checked={completed}
        onChange={() => toggleCompletedState(id)}
      />
      <span className="checked" onClick={() => toggleCompletedState(id)} />
      <span
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        style={{ backgroundColor: `${colorIndicator}` }}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        className="td-todo-item-color-indicator"
      />
      <label htmlFor={id} className="td-todo-item-text">
        {name}
      </label>
      <div
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        style={{
          opacity: isHover ? '1' : '0',
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <i
          className="fas fa-trash td-todo-icon"
          onClick={() =>
            showModal({
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              key: confirmModal.key,
              props: {
                okText: 'Delete this task?',
                cancelText: 'Cancel',
                okHandler: () => {
                  deleteTodoHandler(id);
                },
              },
            })
          }
        />
      </div>
    </div>
  );
};

ToDoItem.defaultProps = {
  className: '',
  colorIndicator: '',
  name: '',
  id: '',
  completed: false,
};

ToDoItem.propTypes = {
  /** component's default classname */
  className: PropTypes.string,

  /** todo's name passed down to label */
  name: PropTypes.string,

  /** todo's colorIndicator passed down to color box */
  colorIndicator: PropTypes.string,

  /** todo's id passed down to id */
  id: PropTypes.string,

  /** todo's complete state passed down to input's checkbox */
  completed: PropTypes.bool,
};

export default ToDoItem;
