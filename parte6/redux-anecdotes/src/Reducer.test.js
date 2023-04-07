import deepFreeze from 'deep-freeze'
import anecdoteReducer,{initialState} from './reducers/anecdoteReducer'
import { CreateAnecdote, ToggableFilterVoted, ToggableImportant, ToggableVoted } from './reducers/accionesCreadoras';

describe('Anecdote Reducers', () => {
      test('should return a proper initial state when called with undefined state', () => {
        const state = initialState
        const action = {
          type: 'DO_NOTHING'
        }
        
        deepFreeze(state)
        const newState = anecdoteReducer(undefined, action)
        expect(newState).toEqual(initialState)
      })
      test('accion de voto', () => { 
        const state = initialState
        deepFreeze(state)
        const id = state[1].id
     
        const newState = anecdoteReducer(state,ToggableVoted(id))
        expect(newState[1]).not.toEqual(state[1])
      })
      test('accion crear nueva nota', () => { 
        const state = initialState
        deepFreeze(state)
        
        const  newState = anecdoteReducer(state,CreateAnecdote({content: 'Nueva anecdota creada desde los test'}))
        expect(newState).toHaveLength(state.length + 1)
       })
      test('Accion orden por voto', () => {
        let state = initialState
        const id = state[1].id
     
        state = anecdoteReducer(state,ToggableVoted(id))
    
        
        deepFreeze(state)
        const newState = anecdoteReducer(state,ToggableFilterVoted())
        expect(newState[0].votes).toBe(1)    
        })
        test('should neuvo', () => {
          const state = initialState 
          const {id} = state[1]

          const newState = anecdoteReducer(state,ToggableImportant(id))
          expect(newState[1]).not.toEqual(state[1])
         })
});
