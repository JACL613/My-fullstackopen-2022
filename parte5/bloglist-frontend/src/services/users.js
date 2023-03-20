import axios from 'axios'
const baseUrl = '/api/login'

const login = (credentials) => {
  const res = axios.post(baseUrl, credentials)
  return res.then(response => response.data).catch(err => err.response.data)
}

export default { login }
