import axios from 'axios';

export const axiosAuth = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

export const setRequestToken = token => {
  axiosAuth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
