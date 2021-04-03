// Hooks
import todoReducer from '../hooks/todoReducer';

// Data
import mockTodos from '../__mocks__/mockTodos';

const initialState = {
  todos: mockTodos,
  filteredTodos: mockTodos,
  uncompletedCount: 7,
  completedPercent: '13',
  currentFilterKey: 'FILTER_ALL',
};

describe('ADD_TODO', () => {
  test('it should add todo from action payload to todos and filteredTodos', () => {
    const action = {
      type: 'ADD_TODO',
      payload: {
        todo: {
          id: '83fc3fc6-c088-4431-a4f5-8c31325d4d57',
          name: 'Test todo',
          categoryId: '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
          completed: false,
        },
      },
    };

    const result = todoReducer(initialState, action);

    expect(result).toHaveProperty('todos');

    const { todos, uncompletedCount, completedPercent } = result;

    expect(todos).toHaveLength(initialState.todos.length + 1);

    const newAddedTodo = todos[todos.length - 1];

    expect(newAddedTodo).toHaveProperty(
      'id',
      '83fc3fc6-c088-4431-a4f5-8c31325d4d57',
    );
    expect(newAddedTodo).toHaveProperty('name', 'Test todo');
    expect(newAddedTodo).toHaveProperty('completed', false);
    expect(newAddedTodo).toHaveProperty(
      'categoryId',
      '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
    );

    expect(uncompletedCount).toBe(8);
    expect(completedPercent).toBe('11');
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

describe('DELETE_TODO', () => {
  test('it should delete todo from todos on provided id', () => {
    const action = {
      type: 'DELETE_TODO',
      payload: {
        id: 'a3405459-8a50-43b1-a46d-ceabe1de7768',
      },
    };

    const result = todoReducer(initialState, action);

    expect(result).toHaveProperty('todos');

    const { todos, uncompletedCount, completedPercent } = result;

    expect(todos).toHaveLength(initialState.todos.length - 1);

    const deletedTodo = todos.find((todo) => todo.id === action.payload.id);
    expect(deletedTodo).toBeUndefined();

    expect(uncompletedCount).toBe(6);
    expect(completedPercent).toBe('14');
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'DELETE_TODO',
    };

    const result = todoReducer(initialState, action);

    expect(result).toEqual(initialState);

    const { uncompletedCount, completedPercent } = result;
    expect(uncompletedCount).toBe(7);
    expect(completedPercent).toBe('13');
  });
});

describe('TOGGLE_COMPLETE', () => {
  test("it should revert todo's completed state", () => {
    const action = {
      type: 'TOGGLE_COMPLETE',
      payload: {
        id: 'a3405459-8a50-43b1-a46d-ceabe1de7768',
        completed: true,
      },
    };

    const result = todoReducer(initialState, action);

    expect(result).toHaveProperty('todos');

    const { todos, uncompletedCount, completedPercent } = result;

    const updatedTodo = todos.find((todo) => todo.id === action.payload.id);
    expect(updatedTodo).toHaveProperty('completed', true);

    expect(uncompletedCount).toBe(6);
    expect(completedPercent).toBe('25');
  });

  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'TOGGLE_COMPLETE',
    };

    const result = todoReducer(initialState, action);

    expect(result).toEqual(initialState);

    const { uncompletedCount, completedPercent } = result;
    expect(uncompletedCount).toBe(7);
    expect(completedPercent).toBe('13');
  });
});

describe('FILTER_COMPLETED', () => {
  test('it should return filtered array of completed state todo', () => {
    const action = {
      type: 'FILTER_COMPLETED',
    };

    const result = todoReducer(initialState, action);

    expect(result).toHaveProperty('filteredTodos');

    const { filteredTodos } = result;

    const uncompletedTodo = filteredTodos.find(
      (todo) => todo.completed === false,
    );

    expect(uncompletedTodo).toBeUndefined();
  });
});

describe('FILTER_ONGOING', () => {
  test('it should return filtered array of uncompleted state todo', () => {
    const action = {
      type: 'FILTER_ONGOING',
    };

    const result = todoReducer(initialState, action);

    expect(result).toHaveProperty('filteredTodos');

    const { filteredTodos } = result;

    const completedTodo = filteredTodos.find((todo) => todo.completed === true);

    expect(completedTodo).toBeUndefined();
  });
});
