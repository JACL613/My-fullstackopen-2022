import React, { useState ,useEffect} from 'react'
import CardPerson from './components/Card.Person'
import Filter from './components/Filter'
import FormPerson from './components/Form.Person'
import Notification from './components/Notification';
import { getAll } from './services/notes.services';

const App = () => {
  const [ persons, setPersons ] = useState() 
  const [search , setSearch] = useState()
  const [ErrorMessage, setErrorMessage] = useState(null);
  const [StatusMessage, setStatusMessage] = useState();

  useEffect(() => {
    return async () => {
      await getAll()
      .then(res => setPersons(res.data))
      .catch(err => {setErrorMessage(
       `${err.message} status: ${err.request.statusS}`
      );
      setStatusMessage('error');
      console.log(err);
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [!persons])
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
      persons={persons} 
      setSearch={e => setSearch(e)}
      />
      <Notification 
      style={StatusMessage} 
      message={ErrorMessage}
      />
      <FormPerson 
      persons={persons} 
      setPersons={(e) => setPersons(e)} 
      setErrorMessage={(e) => setErrorMessage(e)}
      setStatusMessage={(e) => setStatusMessage(e)}       
      />
      <h2>Numbers</h2>
      <CardPerson 
      setPersons={(e) => setPersons(e)} 
      persons={!search && persons? persons : search}
      setErrorMessage={(e) => setErrorMessage(e)}
      setStatusMessage={(e) => setStatusMessage(e)}
      />
    </div>
  )
}

export default App