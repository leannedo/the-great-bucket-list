import { gql } from 'apollo-server-express';

export const CategorySchema = gql`
  type Category {
    id: ID!
    name: String!
    colorIndicator: String!
  }

  input CreateCategoryInput {
    id: ID!
    name: String!
    colorIndicator: String!
  }

  input UpdateCategoryInput {
    id: ID!
    name: String!
    colorIndicator: String!
  }

  extend type Query {
    categories: [Category!]!
  }

  extend type Mutation {
    createCategory(category: CreateTodoInput!): ToDo
    updateCategory(id: ID!, todo: UpdateTodoInput!): ToDo
    deleteCategory(id: ID!): ToDo
  }
`;
