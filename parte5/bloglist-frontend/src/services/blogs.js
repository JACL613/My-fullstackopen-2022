/* eslint-disable no-console */
import axios from 'axios'
const baseUrl = '/api/blogs'
let token = null

const obj = {
  id: '1528223652'
}
console.log(obj)
const setToken = newToken => {
  console.log('tienes token', newToken)
  token = `bearer ${newToken}`
}
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const create = (obj) => {
  const config = {
    headers: { Authorization: token }
  }
  const request = axios.post(baseUrl, obj, config)
  return request.then(res => res.data).catch(err => err.response.data)
}
const updateLikes = (obj) => {
  const config = {
    headers: { Authorization: token }
  }
  const request = axios.put(`${baseUrl}/likes/${obj.id}`, obj, config)
  return request.then(res => res.data).catch(err => err.response.data)
}
const deleteBlog = (obj) => {
  const config = {
    headers: { Authorization: token, ID: obj.id }

  }
  console.log(config)
  const request = axios.delete(`${baseUrl}/${obj.id}`, config)
  return request.then(res => res.data).catch(err => err.response.data)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, setToken, updateLikes, deleteBlog }
