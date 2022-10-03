import axios from 'axios'

const api = axios.create({
  baseURL: 'https://freela-api-blog.herokuapp.com'
})

export default api