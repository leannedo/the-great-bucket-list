// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module './ToDoItem/ToDoItemLoader' was resolved to... Remove this comment to see the full error message
// Components
import ToDoItemLoader from './ToDoItem/ToDoItemLoader';

const ToDoListLoader = ({ count }) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className="todo-list-loader">
    {Array.from(Array(count), (_, i) => (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
