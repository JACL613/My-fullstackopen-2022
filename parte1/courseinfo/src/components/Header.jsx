import React from 'react'

export default function Header({course}) {
  return (
    <div><h1>{
    course
    ?course
    :'Header'}</h1></div>
  )
}
