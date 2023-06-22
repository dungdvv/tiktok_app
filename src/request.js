import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3004/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default request;
