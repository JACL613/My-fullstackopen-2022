import React from 'react'

export default function CardPerson({persons}) {
  return (
    <ul>
         {persons 
          ?persons.map((p) => <li>Nombre: {p.name} <br/> Telefono: {p.number}</li>)
          :null
        }
    </ul>
  )
}
