
import FormAnecdotes from './components/FormAnecdotes';
import ListAnecdotes from './components/ListAnecdotes';
const App = () => {
 


  return (
    <div>
      <h2>Anecdotes</h2>
      <ListAnecdotes />
      <h2>create new</h2>
      <FormAnecdotes />  
    </div>
  )
}

export default App