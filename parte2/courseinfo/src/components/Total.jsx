import React from 'react'

export default function Total({parts}) {const initialValue = 0;
  const total = parts.reduce( 
    (accumulator, currentValue) => accumulator + currentValue.exercises,
  initialValue) 
  return (
    <p>Number of exercise {total}</p>
  )
}
