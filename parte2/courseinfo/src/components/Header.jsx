import React from 'react'

export default function Header({course}) {
  return (
    <div><h1>{
    course
    ?course.name
    :'Header'}</h1></div>
  )
}
