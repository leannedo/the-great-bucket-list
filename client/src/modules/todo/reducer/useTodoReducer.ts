// Hooks
import { useEffect, useReducer } from 'react';
import todoReducer from '../hooks/todoReducer';
import { useFetch } from '../../../hooks/useFetch';

// Apollo
import { useApolloClient } from '@apollo/client';
import { GET_TO_DOS } from '../../../graphql/todos.graphql';
import { CREATE_TO_DO } from '../../../graphql/createTodo.graphql';
import { UPDATE_TO_DO } from '../../../graphql/updateTodo.graphql';
import { DELETE_TO_DO } from '../../../graphql/deleteTodo.graphql';

// Types
import {
  FilterActions,
  ITodoReducer,
  ITodoState,
  TodoActionTypes,
} from '../types';

const initialState: ITodoState = {
  todos: [],
  filteredTodos: [],
  uncompletedCount: 0,
  completedPercent: '0',
  currentFilterKey: FilterActions.FILTER_ALL,
};

const useTodoReducer = (): ITodoReducer => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const apolloClient = useApolloClient();

  const onTodosFetched = (data) => {
    if (data && data.todos) {
      dispatch({ type: TodoActionTypes.SET_TODOS, payload: data.todos });
    }
  };

  const { status: fetchStatus } = useFetch({
    client: apolloClient,
    query: GET_TO_DOS,
    callback: onTodosFetched,
  });

  const addTodo = async (todo) => {
    try {
      const { data } = await apolloClient.mutate({
        mutation: CREATE_TO_DO,
        variables: { todo },
      });

      if (data) {
        const addedTodo = data.createToDo;
        dispatch({ type: TodoActionTypes.ADD_TODO, payload: addedTodo });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCompleteTodo = async (id, completed) => {
    try {
      const { data } = await apolloClient.mutate({
        mutation: UPDATE_TO_DO,
        variables: { id, todo: { completed } },
      });

      if (data) {
        const { updateToDo } = data;
        dispatch({
          type: TodoActionTypes.TOGGLE_COMPLETE,
          payload: updateToDo,
        });
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
        dispatch({ type: TodoActionTypes.DELETE_TODO, payload: id });
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
    filterTodo(state.currentFilterKey);
  }, [state.todos]);

  return {
    todos: state.todos,
    filteredTodos: state.filteredTodos,
    uncompletedCount: state.uncompletedCount,
    completedPercent: state.completedPercent,
    fetchStatus,
    addTodo,
    toggleCompleteTodo,
    deleteTodoItem,
    filterTodo,
  };
};

export default useTodoReducer;
