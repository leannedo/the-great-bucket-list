// Libraries
import React, { useReducer, createContext, useContext, useEffect } from "react";

// Hooks
import todoReducer from "../hooks/todoReducer";

// Data
import todoData from "./todo-data";

/** Initialize context */
const TodoContext = createContext();

/** use context through useTodo */
export const useTodo = () => useContext(TodoContext);

const TodoHooks = ({ children }) => {
  /**
   * @typedef {Object} initialState
   * @property {TodoEntity} todos
   * @property {TodoEntity} filteredTodos
   * @property {number} uncompletedCount
   * @property {number} completedPercent
   * @property {string} currentFilterKey - key that represents current filter action ("FILTER_ALL", "FILTER_ONGOING", "FILTER_COMPLETED")
   */
  const initialState = {
    todos: todoData,
    filteredTodos: [...todoData],
    uncompletedCount: todoData.length,
    completedPercent: 0,
    currentFilterKey: "",
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

  /** Hook to watch changes on todos */
  useEffect(() => {
    filterTodo(currentFilterKey);
  }, [todos]);

  /**
   * dispatch action "DELETE_TODO"
   * @param {string} id - todo'id to be removed
   */
  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  /**
   * dispatch action "TOGGLE_COMPLETE"
   * @param {string} id - todo's id to toggle complete state
   */
  const toggleCompleteTodo = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: { id } });
  };

  /**
   * dispatch action "ADD_TODO"
   * @param {string} content
   * @param {string} categoryId
   */
  const addTodo = ({ content, categoryId }) => {
    dispatch({ type: "ADD_TODO", payload: { content, categoryId } });
  };

  /**
   * dispatch action "FILTER_TODO"
   * @param {string} filterKey - filter action that is triggered at the moment
   */
  const filterTodo = (filterKey) => {
    dispatch({ type: filterKey });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        uncompletedCount,
        completedPercent,
        deleteTodo,
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
