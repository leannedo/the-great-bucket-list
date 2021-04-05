import { gql } from '@apollo/client';

export const CREATE_TO_DO = gql`
  mutation CreateTodo($todo: CreateTodoInput!) {
    createToDo(todo: $todo) {
      categoryId
      id
      name
      completed
    }
  }
`;
