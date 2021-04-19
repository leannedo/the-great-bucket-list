// Libraries
import React, { createContext, useContext } from 'react';

import useTodoReducer from '../hooks/useTodoReducer';
import { ITodoReducer } from '../types';

type ITodoContext = ITodoReducer;

export const TodoContext = createContext<ITodoContext | null>(null);

const TodoProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const {
    todos,
    filteredTodos,
    uncompletedCount,
    completedPercent,
    fetchStatus,
    addTodo,
    toggleCompleteTodo,
    deleteTodoItem,
    filterTodo,
  } = useTodoReducer();

  return (
    <TodoContext.Provider
      value={{
        fetchStatus,
        todos,
        filteredTodos,
        uncompletedCount,
        completedPercent,
        deleteTodoItem,
        toggleCompleteTodo,
        addTodo,
        filterTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = (): ITodoContext | null => useContext(TodoContext);

export { TodoProvider, useTodo };
