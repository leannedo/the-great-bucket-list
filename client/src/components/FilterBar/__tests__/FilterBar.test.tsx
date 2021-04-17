import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FilterBar from '../index';
import { TodoContext } from '../../../modules/todo/contexts/TodoContext';

describe('<FilterBar />', () => {
  const filterTodo = jest.fn();
  const uncompletedCount = 1;

  test('renders Filter Bar with mocked context', () => {
    render(
      <TodoContext.Provider
        value={{
          uncompletedCount,
          filterTodo,
        }}
      >
        <FilterBar />
      </TodoContext.Provider>,
    );
    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/Completed/i)).toBeInTheDocument();
    expect(screen.getByText(/Ongoing/i)).toBeInTheDocument();
    expect(screen.getByText(/1 tasks left/i)).toBeInTheDocument();
  });

  test('trigger click callback on clicking filter keys', () => {
    render(
      <TodoContext.Provider
        value={{
          uncompletedCount,
          filterTodo,
        }}
      >
        <FilterBar />
      </TodoContext.Provider>,
    );
    fireEvent.click(screen.getByText(/Ongoing/i));

    expect(filterTodo).toHaveBeenCalledTimes(1);
    expect(filterTodo).toHaveBeenCalledWith('FILTER_ONGOING');
  });

  test('clicking filter keys will have class name active ', () => {
    render(
      <TodoContext.Provider
        value={{
          uncompletedCount,
          filterTodo,
        }}
      >
        <FilterBar />
      </TodoContext.Provider>,
    );
    fireEvent.click(screen.getByText(/Ongoing/i));

    expect(screen.getByText(/Ongoing/i)).toHaveClass('active');
  });
});
