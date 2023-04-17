
import FormAnecdotes from './components/FormAnecdotes';
import ListAnecdotes from './components/ListAnecdotes';
import Notification from './components/Notification';
import FilterComponent from './components/FilterComponent';
import { useEffect } from 'react';
import {initialAnecdotes}  from './reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';
const App = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
      dispatch(initialAnecdotes())
    },[dispatch])

  return (
    <div>
    <Notification />
      <h2>Anecdotes</h2>
      <ListAnecdotes />
      <h2>Filter</h2>
      <FilterComponent />
      <h2>create new</h2>
      <FormAnecdotes />  
    </div>
  )
}

export default App