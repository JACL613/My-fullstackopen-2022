import React from 'react'
import {  useDispatch } from 'react-redux'
import { CreateAnecdote, messageNotification } from '../reducers/accionesCreadoras'


export default function FormAnecdotes() {
    const dispatch = useDispatch()
    const handelCreate = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(CreateAnecdote(content))
        dispatch(messageNotification({menssage: 'Anecdota Creada'}))
        setTimeout(() => {
          dispatch(messageNotification({menssage: 'CLEAR'}))
          
        }, 5000);        
    }
  return (
    <form onSubmit={handelCreate}>
    <div><input type='text' name='anecdote'/></div>
    <button>create</button>
  </form>
  )
}
