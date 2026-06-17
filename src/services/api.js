import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://state-they-entry-reel.trycloudflare.com/school', //"http://localhost/school",
  timeout: 5000,
  headers: {
    Accept: 'application/json',
  },
})
