import { IToDo, ToDoModel } from '../models/ToDoModel';
import { ApolloError } from 'apollo-server-express';
import mongoose from 'mongoose';

export const getAllTodos = async (
  dbConnection: mongoose.Connection,
): Promise<IToDo[]> => {
  let todos: IToDo[];

  try {
    todos = await ToDoModel(dbConnection).find({});
    console.log(todos);
    if (todos && todos.length > 0) {
      todos = todos.map((todo) => todo.transform());
    }
  } catch (error) {
    console.log(`Error in retrieving all todos: ${error}`);
    throw new ApolloError(`Error in retrieving all todos: ${error}`);
  }

  return todos;
};

export const getTodoByID = async (
  dbConnection: mongoose.Connection,
  id: string,
): Promise<IToDo | null> => {
  let todo: IToDo | null;

  try {
    todo = await ToDoModel(dbConnection).findById(id);
    if (todo) {
      todo = todo.transform();
    }
  } catch (error) {
    console.log(`Error in retrieving todo with id [${id}]: ${error}`);
    throw new ApolloError(`Error in retrieving todo with id [${id}]: ${error}`);
  }

  return todo;
};

export const createTodo = async (
  dbConnection: mongoose.Connection,
  todo: IToDo,
): Promise<IToDo | null> => {
  let createdTodo: IToDo;

  try {
    createdTodo = await ToDoModel(dbConnection).create(todo);
    if (createdTodo) {
      createdTodo = createdTodo.transform();
    }
  } catch (error) {
    console.log(`Error in creating todo: ${error}`);
    throw new ApolloError(`Error in creating todo: ${error}`);
  }

  return createdTodo;
};

export const updateTodo = async (
  dbConnection: mongoose.Connection,
  id,
  todo: IToDo,
): Promise<IToDo | null> => {
  let updatedTodo: IToDo;

  try {
    updatedTodo = await ToDoModel(dbConnection).findByIdAndUpdate(id, todo, {new: true});
    if (updatedTodo) {
      updatedTodo = updatedTodo.transform();
    }
  } catch (error) {
    console.log(`Error in updating todo with id [${id}]: ${error}`);
    throw new ApolloError(`Error in updating todo with id [${id}]: ${error}`);
  }

  return updatedTodo;
};

export const deleteTodo = async (
  dbConnection: mongoose.Connection,
  id,
): Promise<IToDo | null> => {
  let deletedTodo: IToDo;

  try {
    deletedTodo = await ToDoModel(dbConnection).findByIdAndRemove(id);
    if (deletedTodo) {
      deletedTodo = deletedTodo.transform();
    }
  } catch (error) {
    console.log(`Error in deleting todo with id [${id}]: ${error}`);
    throw new ApolloError(`Error in deleting todo with id [${id}]: ${error}`);
  }

  return deletedTodo;
};
