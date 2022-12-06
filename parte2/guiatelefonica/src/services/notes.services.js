import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL

export const getAll = () => {
    return axios.get(`${baseUrl}/persons`)
}
export const postCreate  = (object) => {
    return axios.post(`${baseUrl}/persons` , object )
}
export const deleteId =  ({id}) => {
    return axios.delete(`${baseUrl}/persons/${id}` )
}
export const putContact = ({id , name ,number}) => {
    return axios.put(`${baseUrl}/persons/${id}` , { name ,number})   
}