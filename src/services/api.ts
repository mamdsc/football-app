import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v2.api-football.com/',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
  },
});

export default api;
