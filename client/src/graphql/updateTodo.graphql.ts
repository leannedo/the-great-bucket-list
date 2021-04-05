import { gql } from '@apollo/client';

export const UPDATE_TO_DO = gql`
  mutation UpdateTodo($id: ID!, $todo: UpdateTodoInput!) {
    updateToDo(id: $id, todo: $todo) {
      categoryId
      id
      name
      completed
    }
  }
`;
