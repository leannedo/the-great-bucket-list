// Libraries
import React from 'react';

// Component
import ToDoItem from '../ToDoItem';
import ToDoListLoader from './ToDoListLoader';

// Styling
import './ToDoList.scss';

// Hooks
import { useTodo } from '../../contexts/TodoContext';
import { useCategory } from '../../../category/context/CategoryContext';

// Types
import { FetchStatus } from '../../../../hooks/useFetch';

interface IToDoListProps {
  className?: string;
}

const ToDoList = ({ className }: IToDoListProps): JSX.Element => {
  const { filteredTodos, fetchStatus } = useTodo();
  const { getCategoryById } = useCategory();

  return (
    <div className={`td-todo-list-wrapper ${className}`}>
      {fetchStatus === FetchStatus.FETCHING ? (
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

export default ToDoList;
