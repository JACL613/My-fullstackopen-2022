import React from 'react'
import {  useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


export default function FormAnecdotes() {
    const dispatch = useDispatch()
    const handelCreate = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification({menssage:`se agrego la anecdote`} , 3000))       
    }
  return (
    <form onSubmit={handelCreate}>
    <div><input type='text' name='anecdote'/></div>
    <button>create</button>
  </form>
  )
}
