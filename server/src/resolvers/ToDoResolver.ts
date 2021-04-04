import { ToDoQuery } from '../queries/ToDoQuery';
import { IResolvers } from 'apollo-server';
import { ToDoMutation } from '../mutations/ToDoMutation';

export const ToDoResolver: IResolvers = {
  Query: ToDoQuery,
  Mutation: ToDoMutation,
};
