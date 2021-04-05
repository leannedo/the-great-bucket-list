import { gql } from '@apollo/client';

export const GET_TO_DO = gql`
  query GetTodo($id: ID!) {
    todo(id: $id) {
      categoryId
      id
      name
      completed
    }
  }
`;
