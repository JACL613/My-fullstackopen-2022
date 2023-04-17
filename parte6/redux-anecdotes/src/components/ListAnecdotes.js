import React  from 'react'
import {useSelector , useDispatch} from 'react-redux';
import { ToggableFilterVoted , ToggableImportant,  } from '../reducers/accionesCreadoras';
import { accionVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

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
  const vote = (anecdote) => {
    dispatch(accionVote(anecdote))
    dispatch(setNotification({menssage: `Voto para la anecdote: ${anecdote.id}`},3000))
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
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
          <div>
            <button onClick={() => important(anecdote.id)}>{anecdote.important === false ? 'NoImportant' : 'Important'}</button>
          </div>
        </div>
      )}
    </div>
  )
}
