// Libraries
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ToDoItem' was resolved to '/Users/ngocdo... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// Component
// @ts-expect-error ts-migrate(6142) FIXME: Module './ToDoListLoader' was resolved to '/Users/... Remove this comment to see the full error message
import ToDoItem from './ToDoItem';
import ToDoListLoader from './ToDoListLoader';

// Styling
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../modules/todo/contexts/TodoContext... Remove this comment to see the full error message
import './ToDoList.scss';

// Hooks
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../modules/category/contexts/Categor... Remove this comment to see the full error message
import { useTodo } from '../../../modules/todo/contexts/TodoContext';
import { useCategory } from '../../../modules/category/contexts/CategoryContext';

const ToDoList = ({ className }) => {
  const { filteredTodos, todosFetchStatus } = useTodo();
  const { getCategoryById } = useCategory();

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={`td-todo-list-wrapper ${className}`}>
      {todosFetchStatus === 'fetching' ? (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ToDoListLoader count={6} />
      ) : (
        <>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          {filteredTodos.map((el, id) => {
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'el' implicitly has an 'any' type.
            const category = getCategoryById(el.categoryId);
            return (
              <ToDoItem
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
  className: '',
};

ToDoList.propTypes = {
  /** component's default class name */
  className: PropTypes.string,
};

export default ToDoList;
