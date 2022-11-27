import React from 'react'

export default function Total({allExercise}) {
    let suma = 0
    allExercise.map(item => suma += item.exercises)
  return (
    <p>Number of exercise {suma}</p>
  )
}
