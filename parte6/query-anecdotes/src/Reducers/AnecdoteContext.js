import {createContext, useContext, useReducer} from 'react';

const notificationReducer = (state, action) => {
    switch (action.type) {
        case "SET_MESSAGE":
            return {...state, message: action.payload.message}
        default: 
            return state
    }
}

 const NotificationContext =  createContext()
export const NotificationContextProvider = (props) => {
    const [message , messageDispatch] = useReducer(notificationReducer,'')  
    return ( 
        <NotificationContext.Provider value={[message, messageDispatch]} >
            {props.children}
        </NotificationContext.Provider>
    )  
}

export const useAnecdoteValue = () => {
    const NotificationAndDispatch = useContext(NotificationContext)
    return NotificationAndDispatch[0]
}
export const useAnecdoteDispatch = () => {
    const NotificationAndDispatch = useContext(NotificationContext)
    return NotificationAndDispatch[1]
}


export const useNotification = (message) => {
    const dispatch = useAnecdoteDispatch()
    console.log('el mensaje', message);
    return () => {
        dispatch({type:'SET_MESSAGE' , payload: {message}})
        setTimeout(() => {
            dispatch({type:'SET_MESSAGE' ,payload: {message:'CLEAR'}})
        }, 5000);
    }
}

export const accionNotification  = (dispatch, message) => {
    dispatch({type:'SET_MESSAGE' , payload: {message}})
    setTimeout(() => {
        dispatch({type:'SET_MESSAGE' ,payload: {message:'CLEAR'}})
    }, 5000);
}