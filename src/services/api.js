import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    Authorization: `Bearer ${localStorage.getItem('productiveToken')}`
  }
});

export default instance