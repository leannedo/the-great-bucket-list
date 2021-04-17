// Libraries
import React from 'react';

// Component
import ToDoItem from './ToDoItem';
import ToDoListLoader from './ToDoListLoader';

// Styling
import './ToDoList.scss';

// Hooks
import { useCategory } from '../../../modules/category/context/CategoryContext';

// Apollo
import { useQuery } from '@apollo/client';
import { GET_TO_DO } from '../../../graphql/todo.graphql';

interface IToDoListProps {
  className?: string;
}

const ToDoList = ({ className }: IToDoListProps): JSX.Element => {
  const { loading, data, error } = useQuery(GET_TO_DO, {
    variables: { id: '606a2af0d3f6267300c4923a' },
  });
  const { todo = {} } = data || {};
  const { getCategoryById } = useCategory();
  const category = getCategoryById(todo.categoryId);

  console.log(data);

  if (error) {
    const message = error?.networkError?.result?.errors[0].message;
    return <p>{message}</p>;
  }

  return (
    <div className={`td-todo-list-wrapper ${className}`}>
      {loading ? (
        <ToDoListLoader count={6} />
      ) : (
        <ToDoItem
          key={todo.id}
          {...todo}
          colorIndicator={category.colorIndicator}
        />
      )}
    </div>
  );
};

export default ToDoList;
