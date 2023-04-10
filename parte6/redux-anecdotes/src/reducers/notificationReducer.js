import {createSlice} from '@reduxjs/toolkit'
const initialState = {menssage:'Mensaje inicial'}

const notificationReducer = createSlice({
    name:'notification',
    initialState,
    reducers:{
        SET_MENSSAGE(state , action){
            return {...state ,menssage : action.data.menssage}
        }
    }
})
export const {SET_MESSAGE} = notificationReducer.actions
export default notificationReducer.reducer