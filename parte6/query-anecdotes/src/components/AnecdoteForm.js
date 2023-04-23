import { useMutation, useQueryClient } from "react-query"
import { createAnecdote } from "../services/request"
import { accionNotification, useAnecdoteDispatch } from "../Reducers/AnecdoteContext"

const AnecdoteForm = () => {
  const dispatch = useAnecdoteDispatch()
  const queryClient = useQueryClient()
  const newAnecdoteMutation = useMutation(createAnecdote , {
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 400) {
        return accionNotification(dispatch,data.data.error)
      }
      accionNotification(dispatch,'Se agrego una nota nueva')
      queryClient.invalidateQueries('anecdotes')
    },
  })
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content , votes:0})
    console.log('new anecdote')
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
