import axios from 'axios';

export const initiateAxiosConfig = () => {
  axios.defaults.baseURL = 'https://5f457241e165a60016ba8cca.mockapi.io/api';
};
