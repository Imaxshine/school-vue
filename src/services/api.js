import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://continental-expenditures-smithsonian-trek.trycloudflare.com/school',//'http://localhost/school',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
  },
})
