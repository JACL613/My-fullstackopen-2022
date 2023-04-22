import { useMutation, useQuery, useQueryClient } from 'react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAnecdotes, vote } from './services/request'

const App = () => {
  const queryClient = useQueryClient()
  const upAnecdoteMutation = useMutation(vote , {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    }
  })
  const handleVote = (anecdote) => {
    upAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
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
  {retry:3} 
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
