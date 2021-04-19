import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createClient = (): ApolloClient<unknown> =>
  new ApolloClient({
    uri: 'https://the-great-bucket-list-be.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });
