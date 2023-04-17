import {createSlice} from '@reduxjs/toolkit'
import anecdoteServices from '../services/anecdotes.services';

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//     important: false
//   }
// }

// // 

// export const initialState = anecdotesAtStart.map(asObject)

const anecdotesReducer = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers:{
    Voto(state, action){
      const id = action.payload.id
      return state.map(anecdote => {
        return anecdote.id === id
        ?{...anecdote, votes: anecdote.votes + 1 }
        :anecdote
      })
    },
    Create_Anecdote(state , action){
      const newAnecdote = action.payload
      return [...state,newAnecdote]
    },
    Toggable_Important(state , action){
      return state.map(anecdote => {
        const id = action.data.id
        return anecdote.id === id
        ?{...anecdote,important: !anecdote.important}
        :anecdote
      })
    },
    Filter_For_Voted(state , action){
      return [...state].sort(function (a, b) {
        if (a.votes > b.votes) {
          return -1;
        }
        if (a.votes < b.votes) {
          return 1;
        }
        return 0;
      })  
    },
    appendAnecdotes(state, action) {
      state.push(action.payload)
    },
    setAnecdotes (state, action) {
      return action.payload
    }
  }
})
// const anecdotesReducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch(action.type){
//     case 'Voto':
//       const id = action.data.id
//       return state.map(anecdote => {
//         return anecdote.id === id
//         ?{...anecdote, votes: anecdote.votes + 1 }
//         :anecdote
//       })
//     case 'Create_Anecdote':
//       const newAnecdote = action.data
//     return [...state,newAnecdote]
//     case 'Toggable_Important':
//       return state.map(anecdote => {
//         const id = action.data.id
//         return anecdote.id === id
//         ?{...anecdote,important: !anecdote.important}
//         :anecdote
//       })
//     case 'Filter_For_Voted':
//       return [...state].sort(function (a, b) {
//         if (a.votes > b.votes) {
//           return -1;
//         }
//         if (a.votes < b.votes) {
//           return 1;
//         }
//         return 0;
//       })  
//     default :
//     return state

//   }
// }
export const initialAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote =  (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNew(content)
    dispatch(Create_Anecdote(newAnecdote))
  }
  
}
export const accionVote = (anecdote) => {
  return async dispatch => {
    const upAnecdote = await anecdoteServices.moreVote(anecdote)
    dispatch(Voto(upAnecdote))
  }
}

export const {Voto , Create_Anecdote , Toggable_Important ,Filter_For_Voted , appendAnecdotes, setAnecdotes} = anecdotesReducer.actions
export default anecdotesReducer.reducer