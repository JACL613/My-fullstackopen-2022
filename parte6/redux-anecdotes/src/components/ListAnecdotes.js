import React  from 'react'
import {useSelector , useDispatch} from 'react-redux';
import { ToggableFilterVoted , ToggableImportant, ToggableVoted } from '../reducers/accionesCreadoras';

export default function ListAnecdotes() {
  const anecdotes = useSelector(state => {
    if (state.filter === 'ALL') {
      return state.anecdotes
    }
    return state.filter === 'IMPORTANT'
    ?state.anecdotes.filter(anecdote => anecdote.important)
    :state.anecdotes.filter(anecdote => !anecdote.important)
  })
  const dispatch = useDispatch()
  const vote = (id) => {
    dispatch(ToggableVoted(id))
    dispatch(ToggableFilterVoted())
  }
  const important = (id) => {
    dispatch(ToggableImportant(id))
  }
  return (
    <div>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
             {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
          <div>
            <button onClick={() => important(anecdote.id)}>{anecdote.important === false ? 'NoImportant' : 'Important'}</button>
          </div>
        </div>
      )}
    </div>
  )
}
