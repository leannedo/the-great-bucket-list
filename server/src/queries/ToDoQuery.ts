import { getAllTodos, getTodoByID } from '../controllers/ToDoController';

export const ToDoQuery = {
  todos: async (_parents, _args, context, _info) => {
    return await getAllTodos(context.dbConn);
  },
  todo: async (_parents, args, context, _info) => {
    return await getTodoByID(context.dbConn, args.id);
  },
};
