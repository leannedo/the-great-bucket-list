import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FilterBar from '../index';
import { TodoContext } from '../../../modules/todo/contexts/TodoContext';

const mockedContext = {
    todos: [],
    filteredTodos: [],
    uncompletedCount: 1,
    completedPercent: '0',
    fetchStatus: '',
    addTodo: jest.fn(),
    toggleCompleteTodo: jest.fn(),
    deleteTodoItem: jest.fn(),
    filterTodo: jest.fn(),
}

describe('<FilterBar />', () => {
    beforeEach(
        () => {
            render(
                <TodoContext.Provider
                    value={mockedContext}
                >
                    <FilterBar />
                </TodoContext.Provider>,
            );
        }
    )

  test('renders Filter Bar with mocked context', () => {
    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/Completed/i)).toBeInTheDocument();
    expect(screen.getByText(/Ongoing/i)).toBeInTheDocument();
    expect(screen.getByText(/1 tasks left/i)).toBeInTheDocument();
  });

  test('trigger click callback on clicking filter keys', () => {
    fireEvent.click(screen.getByText(/Ongoing/i));

    expect(mockedContext.filterTodo).toHaveBeenCalledTimes(1);
    expect(mockedContext.filterTodo).toHaveBeenCalledWith('FILTER_ONGOING');
  });

  test('clicking filter keys will have class name active ', () => {
    fireEvent.click(screen.getByText(/Ongoing/i));

    expect(screen.getByText(/Ongoing/i)).toHaveClass('active');
  });
});
