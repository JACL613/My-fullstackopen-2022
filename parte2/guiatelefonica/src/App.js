import React, { useState } from 'react'
import CardPerson from './components/Card.Person'
import Filter from './components/Filter'
import FormPerson from './components/Form.Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [search , setSearch] = useState()


 
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