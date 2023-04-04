import React  from 'react'
import {useSelector , useDispatch} from 'react-redux';
import { ToggableFilterVoted , ToggableVoted } from '../reducers/accionesCreadoras';

export default function ListAnecdotes() {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const vote = (id) => {
    dispatch(ToggableVoted(id))
    dispatch(ToggableFilterVoted())
  }

  return (
    <div>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}
