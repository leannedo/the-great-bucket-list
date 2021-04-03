// Libraries
import axios from 'axios';
//  ts-migrate(7016) FIXME: Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
//  ts-migrate(7016) FIXME: Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
//  ts-migrate(7006) FIXME: Parameter 'todo' implicitly has an 'any' type.
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
    //  ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
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
  //  ts-migrate(7006) FIXME: Parameter 'updatedTodo' implicitly has an 'any' ty... Remove this comment to see the full error message
};

/**
 //  ts-migrate(7006) FIXME: Parameter 'callback' implicitly has an 'any' type.
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
