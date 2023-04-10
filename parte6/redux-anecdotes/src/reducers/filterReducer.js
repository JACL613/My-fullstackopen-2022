import {createSlice} from '@reduxjs/toolkit'

const filterReducer = createSlice({
  name: 'filter',
  initialState: 'ALL',
  reducers:{
    SET_FILTER(state , action){
      return action.filter
    }
  }
})
// const filterReducer = (state = 'ALL', action) => {
//     switch (action.type) {
//         case 'SET_FILTER':
//           return action.filter
        
//       default:
//         return state
//     }
//   }
  export const {SET_FILTER} = filterReducer.actions
  export default filterReducer.reducer