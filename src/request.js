import axios from 'axios';
import utilsLocalStorage from './utils/utilsLocalStorage';

const request = axios.create({
  // baseURL: 'http://localhost:3004/', // for json-server
  baseURL: 'http://localhost:8000/', // real api.
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

request.interceptors.request.use(
  (config) => {
    const token = utilsLocalStorage.getToken();
    const newConfig = { ...config };

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default request;
