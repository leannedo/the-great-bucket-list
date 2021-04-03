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

//  ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
//  ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ADD_TODO', () => {
  //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should add todo from action payload to todos and filteredTodos', () => {
    const action = {
      //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
      type: 'ADD_TODO',
      payload: {
        todo: {
          id: '83fc3fc6-c088-4431-a4f5-8c31325d4d57',
          //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
          name: 'Test todo',
          categoryId: '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
          completed: false,
        },
        //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
      },
    };

    const result = todoReducer(initialState, action);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toHaveProperty('todos');

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    const { todos, uncompletedCount, completedPercent } = result;

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(todos).toHaveLength(initialState.todos.length + 1);

    //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    const newAddedTodo = todos[todos.length - 1];

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(newAddedTodo).toHaveProperty(
      'id',
      '83fc3fc6-c088-4431-a4f5-8c31325d4d57',
    );
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    expect(newAddedTodo).toHaveProperty('name', 'Test todo');
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(newAddedTodo).toHaveProperty('completed', false);
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(newAddedTodo).toHaveProperty(
      'categoryId',
      '6e8cb1b9-3c57-4ee5-96c1-cc8d6e37d04d',
      //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    );

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(7006) FIXME: Parameter 'todo' implicitly has an 'any' type.
    expect(uncompletedCount).toBe(8);
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(completedPercent).toBe('11');
  });

  //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on error', () => {
    const action = {
      //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
      payload: new Error('unit test'),
      type: 'ADD_TODO',
    };

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    const result = todoReducer(initialState, action);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    expect(result).toEqual(initialState);
  });
});

//  ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('DELETE_TODO', () => {
  //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
  //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should delete todo from todos on provided id', () => {
    //  ts-migrate(7006) FIXME: Parameter 'todo' implicitly has an 'any' type.
    const action = {
      //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
      type: 'DELETE_TODO',
      payload: {
        //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
        id: 'a3405459-8a50-43b1-a46d-ceabe1de7768',
      },
    };

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    const result = todoReducer(initialState, action);

    //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toHaveProperty('todos');

    const { todos, uncompletedCount, completedPercent } = result;

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(todos).toHaveLength(initialState.todos.length - 1);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    const deletedTodo = todos.find((todo) => todo.id === action.payload.id);
    //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(deletedTodo).toBeUndefined();

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(uncompletedCount).toBe(6);
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(completedPercent).toBe('14');
  });

  //  ts-migrate(7006) FIXME: Parameter 'todo' implicitly has an 'any' type.
  //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'DELETE_TODO',
    };

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    const result = todoReducer(initialState, action);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialState);

    //  ts-migrate(7006) FIXME: Parameter 'todo' implicitly has an 'any' type.
    const { uncompletedCount, completedPercent } = result;
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(uncompletedCount).toBe(7);
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(completedPercent).toBe('13');
  });
});

//  ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('TOGGLE_COMPLETE', () => {
  //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("it should revert todo's completed state", () => {
    const action = {
      type: 'TOGGLE_COMPLETE',
      payload: {
        id: 'a3405459-8a50-43b1-a46d-ceabe1de7768',
        completed: true,
      },
    };

    const result = todoReducer(initialState, action);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toHaveProperty('todos');

    const { todos, uncompletedCount, completedPercent } = result;

    const updatedTodo = todos.find((todo) => todo.id === action.payload.id);
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(updatedTodo).toHaveProperty('completed', true);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(uncompletedCount).toBe(6);
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(completedPercent).toBe('25');
  });

  //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it does not alter state on error', () => {
    const action = {
      payload: new Error('unit test'),
      type: 'TOGGLE_COMPLETE',
    };

    const result = todoReducer(initialState, action);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toEqual(initialState);

    const { uncompletedCount, completedPercent } = result;
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(uncompletedCount).toBe(7);
    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(completedPercent).toBe('13');
  });
});

//  ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('FILTER_COMPLETED', () => {
  //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should return filtered array of completed state todo', () => {
    const action = {
      type: 'FILTER_COMPLETED',
    };

    const result = todoReducer(initialState, action);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toHaveProperty('filteredTodos');

    const { filteredTodos } = result;

    const uncompletedTodo = filteredTodos.find(
      (todo) => todo.completed === false,
    );

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(uncompletedTodo).toBeUndefined();
  });
});

//  ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('FILTER_ONGOING', () => {
  //  ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it should return filtered array of uncompleted state todo', () => {
    const action = {
      type: 'FILTER_ONGOING',
    };

    const result = todoReducer(initialState, action);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(result).toHaveProperty('filteredTodos');

    const { filteredTodos } = result;

    const completedTodo = filteredTodos.find((todo) => todo.completed === true);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(completedTodo).toBeUndefined();
  });
});
