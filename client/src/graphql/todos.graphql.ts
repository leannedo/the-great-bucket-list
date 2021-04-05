import { gql } from '@apollo/client';

export const GET_TO_DOS = gql`
  query GetTodos {
    todos {
      categoryId
      id
      name
      completed
    }
  }
`;
