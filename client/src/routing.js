import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/'; 

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    console.error('Axios error:', error);
    return Promise.reject(error);
  }
);

const api = {
  get: (url, params) => axiosInstance.get(url, { params }),
  post: (url, data) => axiosInstance.post(url, data),
};

export default api;
