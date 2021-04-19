export interface ITodo {
  id?: string;
  name: string;
  completed: boolean;
  categoryId?: string;
}

export interface ITodoState {
  todos: ITodo[];
  filteredTodos: ITodo[];
  uncompletedCount: number;
  completedPercent: string;
  currentFilterKey: FilterActions;
}

export interface ITodoReducer {
  todos: ITodo[];
  filteredTodos: ITodo[];
  uncompletedCount: number;
  completedPercent: string;
  fetchStatus: string;
  deleteTodoItem: (id: string) => void;
  toggleCompleteTodo: (id: string, completed: boolean) => void;
  addTodo: (todo: ITodo) => void;
  filterTodo: (filterKey: FilterActions) => void;
}

export enum TodoActionTypes {
  SET_TODOS = 'SET_TODOS',
  ADD_TODO = 'ADD_TODO',
  TOGGLE_COMPLETE = 'TOGGLE_COMPLETE',
  DELETE_TODO = 'DELETE_TODO',
}

export type TodoActions =
  | {
      type: TodoActionTypes.SET_TODOS;
      payload: ITodo[];
    }
  | {
      type: TodoActionTypes.ADD_TODO;
      payload: ITodo;
    }
  | {
      type: TodoActionTypes.TOGGLE_COMPLETE;
      payload: ITodo;
    }
  | {
      type: TodoActionTypes.DELETE_TODO;
      payload: string;
    }
  | {
      type: FilterActions.FILTER_ALL;
    }
  | {
      type: FilterActions.FILTER_ONGOING;
    }
  | {
      type: FilterActions.FILTER_COMPLETED;
    };

export enum FilterActions {
  FILTER_ALL = 'FILTER_ALL',
  FILTER_ONGOING = 'FILTER_ONGOING',
  FILTER_COMPLETED = 'FILTER_COMPLETED',
}
