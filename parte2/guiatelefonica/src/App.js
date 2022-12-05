import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import CardPerson from './components/Card.Person'
import Filter from './components/Filter'
import FormPerson from './components/Form.Person'

const App = () => {
  const [ persons, setPersons ] = useState() 
  const [search , setSearch] = useState()

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(res => setPersons(res.data))
    .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [!persons])
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setSearch={e => setSearch(e)}/>
      <FormPerson persons={persons} setPersons={(e) => setPersons(e)}/>
      <h2>Numbers</h2>
      <CardPerson persons={!search && persons? persons : search}/>
    </div>
  )
}

export default App