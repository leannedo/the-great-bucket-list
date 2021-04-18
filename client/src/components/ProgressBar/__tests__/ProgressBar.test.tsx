import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from '../index';
import { TodoContext } from '../../../modules/todo/contexts/TodoContext';

describe('<ProgressBar />', () => {
  const completedPercent = '70';

  test('renders completed percent correctly', () => {
    render(
      <TodoContext.Provider
        value={{
          completedPercent,
        }}
      >
        <ProgressBar />
      </TodoContext.Provider>,
    );

    expect(screen.getByText(/70% completed/i)).toBeInTheDocument();
  });
});
