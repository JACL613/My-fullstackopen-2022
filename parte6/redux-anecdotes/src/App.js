
import { useDispatch } from 'react-redux';
import FormAnecdotes from './components/FormAnecdotes';
import ListAnecdotes from './components/ListAnecdotes';
import { filterChange } from './reducers/accionesCreadoras';
const App = () => {
  const dispatch = useDispatch()
  const filterSelected = (value) => {
    console.log(value)
    dispatch(filterChange(value))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <ListAnecdotes />
      <div>
        all          <input type="radio" name="filter"
          onChange={() => filterSelected('ALL')} />
        important    <input type="radio" name="filter"
          onChange={() => filterSelected('IMPORTANT')} />
        nonimportant <input type="radio" name="filter"
          onChange={() => filterSelected('NONIMPORTANT')} />
      </div>
      <h2>create new</h2>
      <FormAnecdotes />  
    </div>
  )
}

export default App