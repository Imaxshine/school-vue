import axios from 'axios';
export const api = axios.create({
  baseURL: "http://localhost/school",
  timeout: 6000,
  headers: `Authorization Bearer ${'TOKEN'}`,
})