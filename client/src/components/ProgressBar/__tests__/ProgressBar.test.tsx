import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from '../index';
import { TodoContext } from '../../../modules/todo/contexts/TodoContext';

const mockedContext = {
  todos: [],
  filteredTodos: [],
  uncompletedCount: 1,
  completedPercent: '70',
  fetchStatus: '',
  addTodo: jest.fn(),
  toggleCompleteTodo: jest.fn(),
  deleteTodoItem: jest.fn(),
  filterTodo: jest.fn(),
}

describe('<ProgressBar />', () => {
  beforeEach(
      () => {
        render(
            <TodoContext.Provider
                value={mockedContext}
            >
              <ProgressBar />
            </TodoContext.Provider>,
        );
      }
  )

  test('renders completed percent correctly', () => {
    expect(screen.getByText(/70% completed/i)).toBeInTheDocument();
  });
});
