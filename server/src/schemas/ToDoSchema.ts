import { gql } from 'apollo-server-express';

export const ToDoSchema = gql`
  type ToDo {
    id: ID!
    name: String!
    completed: Boolean!
  }

  input CreateTodoInput {
    name: String!
    completed: Boolean = false
  }

  input UpdateTodoInput {
    name: String
    completed: Boolean
  }

  extend type Query {
    todos: [ToDo!]!
    todo(id: ID!): ToDo
  }

  extend type Mutation {
    createToDo(todo: CreateTodoInput!): ToDo
    updateToDo(id: ID!, todo: UpdateTodoInput!): ToDo
    deleteToDo(id: ID!): ToDo
  }
`;
