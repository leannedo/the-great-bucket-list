// Libraries
import { v4 as uuidv4 } from "uuid";

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

    case "TOGGLE_COMPLETE":
      const { id: completedId } = payload;

      updatedTodos = state.todos.map((todo) =>
        todo.id === completedId ? { ...todo, completed: !todo.completed } : todo
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

    case "ADD_TODO":
      const { content, categoryId } = payload;

      updatedTodos = [
        ...state.todos,
        {
          id: uuidv4(),
          content: content,
          categoryId: categoryId,
          completed: false,
        },
      ];
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
