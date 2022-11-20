import React from 'react'

export default function Total({allExercise}) {
  return (
    <p>Number of exercise {allExercise[0] + allExercise[1] + allExercise[2]}</p>
  )
}
