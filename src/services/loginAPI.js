import axios from "axios";
export const loginAPI = axios.create({
  baseURL: 'http://localhost/school',
  timeout: 5000,
  headers:{
    'Accept': 'application/json'
  }
})