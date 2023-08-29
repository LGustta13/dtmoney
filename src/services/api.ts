import axios from 'axios';

// instância do axios
export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3000/api",
})