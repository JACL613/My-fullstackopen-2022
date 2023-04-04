import deepFreeze from 'deep-freeze'
import anecdoteReducer,{initialState} from './reducers/anecdoteReducer'

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
        const accion = {
            type: 'Voto',
            data: {id}
        }
        const newState = anecdoteReducer(state,accion)
        expect(newState[1]).not.toEqual(state[1])
      })
      test('should first', () => { 
        const state = initialState
        deepFreeze(state)
        const newAnecdote = {
            content: 'Nueva anecdota creada desde los test',
            id: (100000 * Math.random()).toFixed(0),
            votes: 0
        }

        const accion = {
            type: 'Create_Anecdote',
            data: {newAnecdote}
        }
        const  newState = anecdoteReducer(state,accion)
        expect(newState).toHaveLength(state.length + 1)
       })
       test('should cloud', () => {
            const baseState = initialState
        const id = baseState[1].id

           const state = anecdoteReducer(baseState,{
            type: 'Voto',
            data: {id}
        })
        const accion = {
            type: 'Filter_For_Voted'
        }
        deepFreeze(baseState)
        const newState = anecdoteReducer(state,accion)
        console.log('filtrado',newState )
        expect(newState[0].votes).toBe(1)    
        })
});
