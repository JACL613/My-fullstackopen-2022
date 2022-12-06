import React,{useState} from 'react'
import { postCreate, putContact } from '../services/notes.services';

export default function FormPerson({persons,setPersons,setErrorMessage,setStatusMessage}) {
    const [ newName, setNewName ] = useState('')
    const [newTel , setNewTel] = useState('')
    const handelSubmit = (e) => {
        e.preventDefault();
        const filter = persons.findLast((person) => person.name === newName || person.number === newTel ? true :false)
        if (!filter) {
          postCreate({name:newName , number: newTel})
          .then(res => {
            setPersons([...persons ,res.data]);
            setErrorMessage(`Genial!!! Se agrego el contacto:${res.data.name}`)
            setStatusMessage('success')
            setTimeout(() => {
             setErrorMessage(null)
           }, 2000)
           e.target.name.value =''
          e.target.tel.value = ''
          })
          .catch(err => {
            setStatusMessage('error');
            setErrorMessage(`Que mal!!! Error: ${err.message} status:${err.request.status}`);
            setTimeout(() => {
              setErrorMessage(null)
            }, 2000);
          });
          e.target.name.value =''
          e.target.tel.value = ''
        
        }else{
          const contact = persons.filter((p) => {
            return p.number === newTel  || p.name === newName ? p : null
          }) 
          if(window.confirm(`No puedes guardar: ${newName}Ya existe: ${contact[0].name} Desea actualizarlo?`)) {
            const updateContact = {id :contact[0].id , name: newName , number: newTel}
            putContact(updateContact)
            .then(res => {
              setPersons('')
              setErrorMessage(`Genial!!! Se cambio por el nombre de contacto:${res.data.name}`)
              setStatusMessage('success')
              setTimeout(() => {
               setErrorMessage(null)
             }, 2000)
             e.target.name.value =''
             e.target.tel.value = ''
            })
            .catch(err => console.log(err))
            e.target.name.value =''
          e.target.tel.value = ''
          }
        }
      }
  return (
    <form onSubmit={handelSubmit}>
    <div>
      name: <input type='text' name='name'  onChange={e => {const {value} = e.target;setNewName(value)}} />
    </div>
    <div>
      number: <input type='number' name='tel' onChange={e => {const {value} = e.target;setNewTel(value)}} />
    </div>
    <div>
      <button type="submit" >add</button>
    </div>
  </form>
  )
}
