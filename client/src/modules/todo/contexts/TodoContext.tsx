// Libraries
import React, { useReducer, createContext, useContext, useEffect } from 'react';

// Hooks
import todoReducer from '../hooks/todoReducer';
import { useFetch } from '../../../hooks/useFetch';

// Apollo
import { useApolloClient } from '@apollo/client';
import { GET_TO_DOS } from '../../../graphql/todos.graphql';
import { CREATE_TO_DO } from '../../../graphql/createTodo.graphql';
import { UPDATE_TO_DO } from '../../../graphql/updateTodo.graphql';
import { DELETE_TO_DO } from '../../../graphql/deleteTodo.graphql';
import { IToDo } from '../../../../../server/src/models/ToDoModel';

interface ITodoContext {
  todosFetchStatus?: string;
  todos?: IToDo[];
  filteredTodos?: IToDo[];
  uncompletedCount?: number;
  completedPercent?: string;
  deleteTodoItem?: (id: string) => void;
  toggleCompleteTodo?: (todo: IToDo) => void;
  addTodo?: (todo: IToDo) => void;
  filterTodo?: (filterKey: string) => void;
}

/** Initialize context */
export const TodoContext = createContext<ITodoContext>(null);

/** use context through useTodo */
export const useTodo = () => useContext(TodoContext);

const TodoHooks = ({ children }) => {
  /**
   * @typedef {Object} initialState
   * @property {[]TodoEntity} todos
   * @property {[]TodoEntity} filteredTodos
   * @property {number} uncompletedCount
   * @property {number} completedPercent
   * @property {string} currentFilterKey - key that represents current filter action ("FILTER_ALL", "FILTER_ONGOING", "FILTER_COMPLETED")
   */
  const initialState = {
    todos: [],
    filteredTodos: [],
    uncompletedCount: 0,
    completedPercent: '0',
    currentFilterKey: 'FILTER_ALL',
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const apolloClient = useApolloClient();

  const {
    todos,
    filteredTodos,
    uncompletedCount,
    completedPercent,
    currentFilterKey,
  } = state;

  const addTodo = async (todo) => {
    try {
      const { data } = await apolloClient.mutate({
        mutation: CREATE_TO_DO,
        variables: { todo },
      });

      if (data) {
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCompleteTodo = async ({ id, completed }) => {
    try {
      const { data } = await apolloClient.mutate({
        mutation: UPDATE_TO_DO,
        variables: { id, todo: { completed } },
      });

      if (data) {
        const { updateToDo } = data;
        dispatch({ type: 'TOGGLE_COMPLETE', payload: updateToDo });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodoItem = async (id) => {
    try {
      const { data } = await apolloClient.mutate({
        mutation: DELETE_TO_DO,
        variables: { id },
      });

      if (data) {
        dispatch({ type: 'DELETE_TODO', payload: { id } });
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterTodo = (filterKey) => {
    dispatch({ type: filterKey });
  };

  useEffect(() => {
    filterTodo(currentFilterKey);
  }, [todos]);

  const onTodosFetched = (data) => {
    if (data && data.todos) {
      dispatch({ type: 'SET_TODOS', payload: { todos: data.todos } });
    }
  };

  const { status: todosFetchStatus } = useFetch({
    client: apolloClient,
    query: GET_TO_DOS,
    callback: onTodosFetched,
  });

  return (
    <TodoContext.Provider
      value={{
        todosFetchStatus,
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

export default TodoHooks;
