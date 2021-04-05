// Hooks
import todoReducer from '../hooks/todoReducer';

const initialState = {
  todos: [
    {
      id: 'mock-todo-1',
      name: 'Mock Todo 1',
      completed: true,
      categoryId: 'cat-1',
    },
  ],
  filteredTodos: [
    {
      id: 'mock-todo-1',
      name: 'Mock Todo 1',
      completed: true,
      categoryId: 'cat-1',
    },
  ],
  uncompletedCount: 0,
  completedPercent: '100',
  currentFilterKey: 'FILTER_ALL',
};

describe('add todo', () => {
  test('it should add todo from action payload to todos and filteredTodos', () => {
    const addedTodo = {
      id: 'mock-todo-2',
      name: 'Mock Todo 2',
      categoryId: 'cat-2',
      completed: false,
    };
    const action = {
      type: 'ADD_TODO',
      payload: {
        todo: addedTodo,
      },
    };

    const expectedResult = {
      ...initialState,
      ...{
        todos: [
          {
            id: 'mock-todo-1',
            name: 'Mock Todo 1',
            completed: true,
            categoryId: 'cat-1',
          },
          {
            id: 'mock-todo-2',
            name: 'Mock Todo 2',
            categoryId: 'cat-2',
            completed: false,
          },
        ],
        filteredTodos: [
          {
            id: 'mock-todo-1',
            name: 'Mock Todo 1',
            completed: true,
            categoryId: 'cat-1',
          },
          {
            id: 'mock-todo-2',
            name: 'Mock Todo 2',
            categoryId: 'cat-2',
            completed: false,
          },
        ],
        uncompletedCount: 1,
        completedPercent: '50',
      },
    };
    const result = todoReducer(initialState, action);

    expect(result).toMatchObject(expectedResult);
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'ADD_TODO',
    };

    const result = todoReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});

describe('delete todo', () => {
  test('it should delete todo from todos on provided id', () => {
    const action = {
      type: 'DELETE_TODO',
      payload: {
        id: 'mock-todo-1',
      },
    };

    const expectedResult = {
      ...initialState,
      ...{
        todos: [],
        filteredTodos: [],
        uncompletedCount: 0,
        completedPercent: '0',
      },
    };
    const result = todoReducer(initialState, action);

    expect(result).toMatchObject(expectedResult);
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'DELETE_TODO',
    };

    const result = todoReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});

describe('toggle completed state', () => {
  test("it should revert todo's completed state", () => {
    const action = {
      type: 'TOGGLE_COMPLETE',
      payload: {
        id: 'mock-todo-1',
        completed: false,
      },
    };

    const expectedResult = {
      ...initialState,
      ...{
        todos: [
          {
            id: 'mock-todo-1',
            name: 'Mock Todo 1',
            completed: false,
            categoryId: 'cat-1',
          },
        ],
        filteredTodos: [
          {
            id: 'mock-todo-1',
            name: 'Mock Todo 1',
            completed: false,
            categoryId: 'cat-1',
          },
        ],
        uncompletedCount: 1,
        completedPercent: '0',
      },
    };

    const result = todoReducer(initialState, action);

    expect(result).toMatchObject(expectedResult);
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'TOGGLE_COMPLETE',
    };

    const result = todoReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});

describe('filter todos', () => {
  const initialState = {
    todos: [
      {
        id: 'mock-todo-1',
        name: 'Mock Todo 1',
        completed: true,
        categoryId: 'cat-1',
      },
      {
        id: 'mock-todo-2',
        name: 'Mock Todo 2',
        completed: false,
        categoryId: 'cat-2',
      },
    ],
    filteredTodos: [
      {
        id: 'mock-todo-1',
        name: 'Mock Todo 1',
        completed: true,
        categoryId: 'cat-1',
      },
      {
        id: 'mock-todo-2',
        name: 'Mock Todo 2',
        completed: false,
        categoryId: 'cat-2',
      },
    ],
    uncompletedCount: 1,
    completedPercent: '50',
    currentFilterKey: 'FILTER_ALL',
  };

  test('it should filter completed todos', () => {
    const action = {
      type: 'FILTER_COMPLETED',
    };

    const expectedResult = {
      ...initialState,
      ...{
        filteredTodos: [
          {
            id: 'mock-todo-1',
            name: 'Mock Todo 1',
            completed: true,
            categoryId: 'cat-1',
          },
        ],
        currentFilterKey: 'FILTER_COMPLETED',
      },
    };

    const result = todoReducer(initialState, action);

    expect(result).toMatchObject(expectedResult);
  });

  test('it should filter uncompleted todos', () => {
    const action = {
      type: 'FILTER_ONGOING',
    };

    const expectedResult = {
      ...initialState,
      ...{
        filteredTodos: [
          {
            id: 'mock-todo-2',
            name: 'Mock Todo 2',
            completed: false,
            categoryId: 'cat-2',
          },
        ],
        currentFilterKey: 'FILTER_ONGOING',
      },
    };

    const result = todoReducer(initialState, action);

    expect(result).toMatchObject(expectedResult);
  });
});
