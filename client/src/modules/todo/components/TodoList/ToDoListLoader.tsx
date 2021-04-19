// Libraries
import React from 'react';

// Components
import ToDoItemLoader from '../ToDoItem/ToDoItemLoader';

interface IToDoListLoaderProps {
  count?: number;
}

const ToDoListLoader = ({ count = 5 }: IToDoListLoaderProps): JSX.Element => (
  <div className="todo-list-loader">
    {Array.from(Array(count), (_, i) => (
      <ToDoItemLoader key={i} width="100%" />
    ))}
  </div>
);

export default ToDoListLoader;
