// Libraries
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

/**
 * send new todo to API server
 * @param {TodoEntity} todo
 * @param {function} callback
 */
const postTodo = async (todo, callback) => {
  try {
    const response = await axios({
      url: '/todos',
      method: 'post',
      data: { ...todo, id: uuidv4() },
    });

    if (callback) {
      callback(response.data);
    }
  } catch (error) {
    // Log error / display error message
  }
};

/**
 * send id to API server to delete todo
 * @param {string} id
 * @param {function} callback
 */
const deleteTodo = async (id, callback) => {
  try {
    const response = await axios({
      url: `/todos/${id}`,
      method: 'delete',
    });

    if (callback) {
      callback(response.data);
    }
  } catch (error) {
    // Log error / display error message
  }
};

/**
 * send new todo to API server to update database
 * @param {TodoEntity} updatedTodo
 * @param {function} callback
 */
const putTodo = async (updatedTodo, callback) => {
  try {
    const response = await axios({
      url: `/todos/${updatedTodo.id}`,
      method: 'put',
      data: updatedTodo,
    });

    if (callback) {
      callback(response.data);
    }
  } catch (error) {
    // Log error / display error message
  }
};

export { postTodo, putTodo, deleteTodo };
