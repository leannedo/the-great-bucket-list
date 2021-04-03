// Libraries
import React from 'react';

//  ts-migrate(6142) FIXME: Module './ToDoItem/ToDoItemLoader' was resolved to... Remove this comment to see the full error message
// Components
import ToDoItemLoader from './ToDoItem/ToDoItemLoader';

type Props = {
  count?: number;
};

const ToDoListLoader = ({ count }: Props) => (
  //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className="todo-list-loader">
    {Array.from(Array(count), (_, i) => (
      //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ToDoItemLoader key={i} width="100%" />
    ))}
  </div>
);

ToDoListLoader.defaultProps = {
  count: 5,
};

export default ToDoListLoader;
