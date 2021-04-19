// Helper functions
import { calculateCompletedPercent } from '../hooks/helpers';

// Types
import {
  FilterActions,
  ITodo,
  ITodoState,
  TodoActions,
  TodoActionTypes,
} from '../types';

const todoReducer = (state: ITodoState, action: TodoActions): ITodoState => {
  switch (action.type) {
    case TodoActionTypes.SET_TODOS: {
      const todos = action.payload;

      const uncompletedCount = todos.filter((todo: ITodo) => !todo.completed)
        .length;
      const completedCount = todos.length - uncompletedCount;

      return {
        ...state,
        todos,
        uncompletedCount,
        completedPercent: calculateCompletedPercent(
          completedCount,
          todos.length,
        ),
      };
    }

    case TodoActionTypes.ADD_TODO: {
      const addedTodo = action.payload;

      if (!addedTodo) {
        return state;
      }

      const updatedTodos = [...state.todos, addedTodo];
      const uncompletedCount = updatedTodos.filter((todo) => !todo.completed)
        .length;
      const completedCount = updatedTodos.length - uncompletedCount;

      return {
        ...state,
        todos: updatedTodos,
        filteredTodos: updatedTodos,
        uncompletedCount,
        completedPercent: calculateCompletedPercent(
          completedCount,
          updatedTodos.length,
        ),
      };
    }

    case TodoActionTypes.TOGGLE_COMPLETE: {
      const { id, completed } = action.payload;

      const updatedTodos = state.todos.map((todo: ITodo) =>
        todo.id === id ? { ...todo, completed } : todo,
      );
      const uncompletedCount = updatedTodos.filter(
        (todo: ITodo) => !todo.completed,
      ).length;
      const completedCount = updatedTodos.length - uncompletedCount;

      return {
        ...state,
        todos: updatedTodos,
        filteredTodos: updatedTodos,
        uncompletedCount,
        completedPercent: calculateCompletedPercent(
          completedCount,
          updatedTodos.length,
        ),
      };
    }

    case TodoActionTypes.DELETE_TODO: {
      const deletedId = action.payload;

      const updatedTodos = state.todos.filter(
        (todo: ITodo) => todo.id !== deletedId,
      );
      const uncompletedCount = updatedTodos.filter(
        (todo: ITodo) => !todo.completed,
      ).length;
      const completedCount = updatedTodos.length - uncompletedCount;

      return {
        ...state,
        todos: updatedTodos,
        filteredTodos: updatedTodos,
        uncompletedCount,
        completedPercent: calculateCompletedPercent(
          completedCount,
          updatedTodos.length,
        ),
      };
    }

    case FilterActions.FILTER_COMPLETED: {
      return {
        ...state,
        filteredTodos: state.todos.filter((todo: ITodo) => todo.completed),
        currentFilterKey: action.type,
      };
    }

    case FilterActions.FILTER_ONGOING: {
      return {
        ...state,
        filteredTodos: state.todos.filter((todo: ITodo) => !todo.completed),
        currentFilterKey: action.type,
      };
    }

    case FilterActions.FILTER_ALL: {
      return {
        ...state,
        filteredTodos: state.todos,
        currentFilterKey: action.type,
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
