import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001/clone-85b97/us-central1/api',
});

export default axiosInstance;
