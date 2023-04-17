import {createSlice} from '@reduxjs/toolkit'
const initialState = {menssage:'Mensaje inicial'}

const notificationReducer = createSlice({
    name:'notification',
    initialState,
    reducers:{
        SET_MESSAGE(state , action){
            console.log(action.payload);
            return {...state ,menssage : action.payload.menssage}
        }
    }
})
export const {SET_MESSAGE} = notificationReducer.actions
export const setNotification = (menssage , time) => {
    return dispatch => {
        dispatch(SET_MESSAGE(menssage))
        setTimeout(() => {
            dispatch(SET_MESSAGE({menssage: 'CLEAR'}))
    }, time);
  }
}
export default notificationReducer.reducer