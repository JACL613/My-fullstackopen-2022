import axios from 'axios';
const baseUrl = 'http://localhost:3003/anecdotes'
const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }
const createNew = async (content) => {
    const object = {content,votes:0, important:false,}
    const response = await axios.post(baseUrl, object)
    return response.data
}
const moreVote = async (anecdote) => {
    const anecdoteNew = {...anecdote, votes: anecdote.votes + 1}
    const response = await axios.put(`${baseUrl}/${anecdoteNew.id}`,anecdoteNew )
    console.log(response)
    return response.data
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, createNew , moreVote}