import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createClient = (): ApolloClient<unknown> =>
  new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  });
