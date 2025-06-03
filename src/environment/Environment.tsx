// api/github.ts
import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

axios.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err);
  }
);

export default github;
