import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import UseFetchExample, { TEST_QUERY } from './UseFetchExample';
import { render, screen } from '@testing-library/react';

describe('useFetch', () => {
  test('useFetch returns data', async () => {
    const mocks = [
      {
        request: {
          query: TEST_QUERY,
          variables: {
            id: '123',
          },
        },
        result: {
          data: {
            test: {
              id: '123',
              name: 'John Doe',
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UseFetchExample />
      </MockedProvider>,
    );

    expect(screen.getByText('Fetching')).toBeInTheDocument();
    const name = await screen.findByText('John Doe');
    expect(name).toBeInTheDocument();
  });

  test('useFetch returns error', async () => {
    const mocks = [
      {
        request: {
          query: TEST_QUERY,
          variables: {
            id: '123',
          },
        },
        error: new Error('An error occurred'),
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UseFetchExample />
      </MockedProvider>,
    );

    expect(screen.getByText('Fetching')).toBeInTheDocument();

    const error = await screen.findByText('Data fetching error');
    expect(error).toBeInTheDocument();
  });
});
