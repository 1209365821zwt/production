import axios from 'axios';
const instance=axios.create({
    baseURL: process.env.NODE_ENV==='development'?'/api':''
})
export default {
    get: (url, data) => instance.get(url, { params: data }),
    post: (url, data) => instance.post(url, data)
  }