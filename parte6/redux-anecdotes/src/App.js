
import FormAnecdotes from './components/FormAnecdotes';
import ListAnecdotes from './components/ListAnecdotes';
import Notification from './components/Notification';
import FilterComponent from './components/FilterComponent';
const App = () => {
 

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