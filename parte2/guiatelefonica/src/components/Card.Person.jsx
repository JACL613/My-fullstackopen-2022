import React from 'react'
import { deleteId } from '../services/notes.services'

export default function CardPerson({persons , setPersons ,setErrorMessage,setStatusMessage}) {
  const handdelDelete = ({id, name}) => {
   if (window.confirm(`Desea eliminar este contacto: ${name}` )) {
    deleteId({id})
    .then(res => {
      setPersons( persons.filter((p)=> {
        return p.id === id 
        ? null 
        : p
     }));
     setErrorMessage(`Genial!!! Se borro el contacto:${name}`)
     setStatusMessage('success')
     setTimeout(() => {
      setErrorMessage(null)
    }, 2000)
    })
    .catch(err => {
      setStatusMessage('error');
      setErrorMessage(`Que mal!!! Error: ${err.message} status:${err.request.status}`);
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000);
    });
   }
  }
  return (
    <ul>
         {persons 
          ?persons.map((p) => <li key={p.id}>Nombre: {p.name} <br/> Telefono: {p.number} <button onClick={() => handdelDelete({id : p.id,name: p.name})}>borrar</button></li>)
          :null
        }
    </ul>
  )
}
