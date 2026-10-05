import axios from "axios";

type Env = {
  VITE_API_BASE_URL?: string;
  REACT_APP_API_BASE_URL?: string;
};

const env = import.meta.env as unknown as Env;

const api = axios.create({
  baseURL: env.VITE_API_BASE_URL ?? env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
