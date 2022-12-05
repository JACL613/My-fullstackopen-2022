import React from 'react'

export default function CardPerson({persons}) {
  return (
    <ul>
         {persons 
          ?persons.map((p) => <li key={p.id}>Nombre: {p.name} <br/> Telefono: {p.number}</li>)
          :null
        }
    </ul>
  )
}
