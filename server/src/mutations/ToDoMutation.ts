import {
  createTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/ToDoController';

export const ToDoMutation = {
  createToDo: async (_parents, args, context, _info) => {
    return await createTodo(context.dbConn, args.todo);
  },

  updateToDo: async (_parents, args, context, _info) => {
    return await updateTodo(context.dbConn, args.id, args.todo);
  },

  deleteToDo: async (_parents, args, context, _info) => {
    return await deleteTodo(context.dbConn, args.id);
  },
};
