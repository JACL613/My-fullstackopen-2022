import { useMutation, useQuery, useQueryClient } from 'react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAnecdotes, vote } from './services/request'
import { accionNotification, useAnecdoteDispatch } from './Reducers/AnecdoteContext'

const App = () => {
  const queryClient = useQueryClient()
  const upAnecdoteMutation = useMutation(vote , {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    }
  })
  const dispatch = useAnecdoteDispatch()
  const handleVote = (anecdote) => {
    upAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
    accionNotification(dispatch,`Se voto por la nota: ${anecdote.id}`)
    console.log('vote')
  }

  // const anecdotes = [
  //   {
  //     "content": "If it hurts, do it more often",
  //     "id": "47145",
  //     "votes": 0
  //   },
  // ]

  const result = useQuery('anecdotes', 
  getAnecdotes,
  {retry:3 ,refetchOnWindowFocus: false} 
  )
  if (result.isLoading) {
    return <div>is Loading....</div>
  } else if(result.isError){
    return <div>anecdote service not available due to problems in server</div>
  }
  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
