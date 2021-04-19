import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Dashboard from './index';
import { MockedProvider } from '@apollo/client/testing';
import { ModalProvider } from '../../modules/modal/context/ModalContext';
import { CategoryProvider } from '../../modules/category/context/CategoryContext';
import { TodoProvider } from '../../modules/todo/contexts/TodoContext';
import userEvent from '@testing-library/user-event';
import { CREATE_TO_DO } from '../../graphql/createTodo.graphql';
import { GET_TO_DOS } from '../../graphql/todos.graphql';

describe('Dashboard integration tests', () => {
  const mocks = [
    {
      request: {
        query: CREATE_TO_DO,
        variables: {
          todo: {
            name: 'Buy groceries',
            categoryId: 'ceaa5efc-b400-41d0-9d61-af8cc842db20',
            completed: false,
          },
        },
      },
      result: {
        data: {
          createToDo: {
            categoryId: 'ceaa5efc-b400-41d0-9d61-af8cc842db20',
            id: '123',
            name: 'Buy groceries',
            completed: false,
          },
        },
      },
    },
    {
      request: {
        query: GET_TO_DOS,
        variables: {},
      },
      result: {
        data: {
          todos: [
            {
              categoryId: 'ceaa5efc-b400-41d0-9d61-af8cc842db20',
              id: '124',
              name: 'Do homework',
              completed: false,
            },
          ],
        },
      },
    },
  ];

  beforeEach(() => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ModalProvider>
          <CategoryProvider>
            <TodoProvider>
              <Dashboard />
            </TodoProvider>
          </CategoryProvider>
        </ModalProvider>
      </MockedProvider>,
    );
  });

  test('render stored todos on initial load', async () => {
    expect(await screen.findByText(/Do homework/i)).toBeInTheDocument();
  });

  test('Add new todo user flow', async () => {
    const typedValue = 'Buy groceries';

    // user types in todos input
    const input = screen.getByPlaceholderText(/what's needed to be done/i);
    userEvent.type(input, typedValue);

    // user selects category
    const categoryCheckbox = screen.getByRole('option');
    userEvent.click(categoryCheckbox);

    const category = screen.getAllByText(/Assignment/i);

    userEvent.click(category[1]);

    // user presses Enter
    fireEvent.keyUp(input, { key: 'Enter', keyCode: 13 });

    const todo = await screen.findByText(typedValue);
    expect(todo).toBeInTheDocument();
  });
});
