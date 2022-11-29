import React from 'react'

export default function Content({parts}) {
  return parts.map((part)=>
  <p key={part.id}>Parte: {part.name} <br/> Ejercicio: {part.exercises}</p>
  )
}
