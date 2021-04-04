import { ApolloServer } from 'apollo-server-express';
import { schema } from './schemas';
import { resolvers } from './resolvers';
import { context } from './context';

export const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context,
});
