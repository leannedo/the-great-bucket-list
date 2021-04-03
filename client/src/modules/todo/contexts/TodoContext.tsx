// Libraries
import React, { useReducer, createContext, useContext, useEffect } from 'react';

// Hooks
import todoReducer from '../hooks/todoReducer';
import { useFetch } from '../../../hooks/useFetch';

// Async
import { postTodo, putTodo, deleteTodo } from '../hooks/async';

/** Initialize context */
const TodoContext = createContext();

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
    completedPercent: 0,
    currentFilterKey: 'FILTER_ALL',
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  /** Extract data from state */
  const {
    todos,
    filteredTodos,
    uncompletedCount,
    completedPercent,
    currentFilterKey,
  } = state;

  /**
   * Post todo to BE and dispatch action to reducer
   * @param {TodoEntity} todo
   *
   * @typedef {Object} TodoEntity
   * @property {string} id - how todo is distinguished
   * @property {string} content - todo's content
   * @property {string} categoryId - todo's category which is represented by category's color
   * @property {boolean} completed - state of completion in each todo
   */
  const addTodo = (todo) => {
    postTodo(todo, (resData) => {
      if (resData) {
        dispatch({ type: 'ADD_TODO', payload: { todo: resData } });
      }
    });
  };

  /**
   * dispatch action "TOGGLE_COMPLETE"
   * @param {string} id - todo's id to toggle complete state
   */
  const toggleCompleteTodo = ({ id, completed }) => {
    const updatedTodo = { id, completed };

    putTodo(updatedTodo, (resData) => {
      if (resData) {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: { id, completed } });
      }
    });
  };

  /**
   * dispatch action "DELETE_TODO"
   * @param {string} id - todo'id to be removed
   */
  const deleteTodoItem = (id) => {
    deleteTodo(id, (resData) => {
      if (resData) {
        dispatch({ type: 'DELETE_TODO', payload: { id } });
      }
    });
  };

  /**
   * dispatch action "FILTER_TODO"
   * @param {string} filterKey - filter action that is triggered at the moment
   */
  const filterTodo = (filterKey) => {
    dispatch({ type: filterKey });
  };

  /** Hook to watch changes on todos */
  useEffect(() => {
    filterTodo(currentFilterKey);
  }, [todos]);

  /** Set todos after fetching */
  const onTodosFetched = (fetchedTodos) => {
    if (fetchedTodos && fetchedTodos.length > 0) {
      dispatch({ type: 'SET_TODOS', payload: { todos: fetchedTodos } });
    }
  };

  /** Fetch todos on page load */
  const { status: todosFetchStatus } = useFetch({
    url: '/todos',
    method: 'get',
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
