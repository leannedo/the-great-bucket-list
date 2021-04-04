import { gql } from 'apollo-server-express';

export const DefaultSchema = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;
