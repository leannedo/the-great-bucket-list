import { gql } from '@apollo/client';

export const DELETE_TO_DO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteToDo(id: $id) {
      id
    }
  }
`;
