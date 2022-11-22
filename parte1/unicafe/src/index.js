import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const porcentaje = (total , valor) => {
    return valor / total * 100
  }
  const promedio = (x) => {
    let suma = 0
    x.map(x => suma += x)
    return suma / x.length
  }
  return (
    <div>
      <h1>Dar Retroalimentación</h1>
        <button onClick={() => setGood(good + 1)}>
          Buena
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          Mala
        </button>
        {
          good || neutral || bad 
          ? <div>
          <h2>Estadísticas</h2> 
          <ul>
            <li>Buenas: {good}</li>
            <li>Neutrales: {neutral}</li>
            <li>Malas: {bad}</li>
            <li>Promedio: {promedio([good,neutral,bad])}</li>
            <li>Negativas {porcentaje(good + neutral + bad,bad)}</li>
            <li>Neutrales {porcentaje(good + neutral + bad,neutral)}</li>
            <li>Positivas {porcentaje(good + neutral + bad,good)}</li>
          </ul>
          </div>
          :<h2>No hay Estadísticas</h2>
        }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)