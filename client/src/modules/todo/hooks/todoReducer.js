// Helper functions
import { calculateCompletedPercent } from "./helpers";

/**
 * todoReducer receives 2 params: state & action
 * @param {Object} currentState - Initial state to be computed
 * @param {Object} action
 * @param {string} action.type - Action type, including "DELETE_TODO", "TOGGLE_COMPLETE", "ADD_TODO", "FILTER_ALL", "FILTER_ONGOING", "FILTER_COMPLETED"
 * @param {Object} action.payload - Extra data
 * @returns {Object} return computed state
 */

const todoReducer = (currentState, { type, payload }) => {
  const state = { ...currentState };
  let updatedTodos = [];
  let uncompletedCount = 0;
  let completedCount = 0;

  switch (type) {
    case "SET_TODOS":
      const { todos: fetchedTodos } = payload;

      uncompletedCount = fetchedTodos.filter((todo) => !todo.completed).length;
      completedCount = fetchedTodos.length - uncompletedCount;

      return {
        ...state,
        todos: fetchedTodos,
        uncompletedCount: uncompletedCount,
        completedPercent: calculateCompletedPercent(
          completedCount,
          fetchedTodos.length
        ),
      };

    case "ADD_TODO":
      const { todo: addedTodo } = payload;

      updatedTodos = [...state.todos, addedTodo];
      uncompletedCount = updatedTodos.filter((todo) => !todo.completed).length;
      completedCount = updatedTodos.length - uncompletedCount;

      return {
        ...state,
        todos: updatedTodos,
        filteredTodos: updatedTodos,
        uncompletedCount: uncompletedCount,
        completedPercent: calculateCompletedPercent(
          completedCount,
          updatedTodos.length
        ),
      };

    case "TOGGLE_COMPLETE":
      const { id: completedId, completed } = payload;

      updatedTodos = state.todos.map((todo) =>
        todo.id === completedId ? { ...todo, completed } : todo
      );
      uncompletedCount = updatedTodos.filter((todo) => !todo.completed).length;
      completedCount = updatedTodos.length - uncompletedCount;

      return {
        ...state,
        todos: updatedTodos,
        filteredTodos: updatedTodos,
        uncompletedCount: uncompletedCount,
        completedPercent: calculateCompletedPercent(
          completedCount,
          updatedTodos.length
        ),
      };

    case "DELETE_TODO":
      const { id: deletedId } = payload;

      updatedTodos = state.todos.filter((todo) => todo.id !== deletedId);
      uncompletedCount = updatedTodos.filter((todo) => !todo.completed).length;
      completedCount = updatedTodos.length - uncompletedCount;

      return {
        ...state,
        todos: updatedTodos,
        filteredTodos: updatedTodos,
        uncompletedCount: uncompletedCount,
        completedPercent: calculateCompletedPercent(
          completedCount,
          updatedTodos.length
        ),
      };

    case "FILTER_COMPLETED":
      return {
        ...state,
        filteredTodos: state.todos.filter((todo) => todo.completed),
        currentFilterKey: type,
      };

    case "FILTER_ONGOING":
      return {
        ...state,
        filteredTodos: state.todos.filter((todo) => !todo.completed),
        currentFilterKey: type,
      };

    case "FILTER_ALL":
      return {
        ...state,
        filteredTodos: state.todos,
        currentFilterKey: type,
      };

    default:
      return currentState;
  }
};

export default todoReducer;
