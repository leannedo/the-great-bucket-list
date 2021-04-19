import React from 'react';
import { FetchStatus, useFetch } from '../useFetch';
import { gql, useApolloClient } from '@apollo/client';

export const TEST_QUERY = gql`
  query GetTestData($id: ID!) {
    test(id: $id) {
      id
      name
    }
  }
`;

const UseFetchExample = (): JSX.Element => {
  const apolloClient = useApolloClient();
  const { data, error, status } = useFetch({
    client: apolloClient,
    query: TEST_QUERY,
    variables: { id: '123' },
  });

  return (
    <div>
      {status === FetchStatus.FETCHING && <p>Fetching</p>}
      {error && <div>{error}</div>}
      {data?.test?.name && <p>Name: {data.test.name}</p>}
    </div>
  );
};

export default UseFetchExample;
