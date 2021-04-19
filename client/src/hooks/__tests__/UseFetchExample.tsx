import React, { useEffect } from 'react';
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

  useEffect(() => {
    console.log('test');
  }, []);

  return (
    <div>
      {status === FetchStatus.FETCHING && <p>Fetching</p>}
      {error && <div>Data fetching error</div>}
      {data && <p>Name: {data.test.name}</p>}
    </div>
  );
};

export default UseFetchExample;
