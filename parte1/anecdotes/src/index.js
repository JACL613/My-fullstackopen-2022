import React, { useState ,useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votos, setVotos] = useState()
  const [maxVotos, setMaxVotos] = useState(0)
  const [featured, setFeatured] = useState([])

  // efecto de anecdota con mayor votos
  useEffect(()=>{
    const allVotos = anecdotes.map(anecdote =>{return anecdote.votos})
    const regla = Math.max(...allVotos);
    setMaxVotos(regla)
    const anecdoteFeatured = anecdotes.filter(anecdote => anecdote.votos >= maxVotos)
    setFeatured([...anecdoteFeatured]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxVotos,votos])

  // Efecto de para siguente anecdota
  useEffect(()=> {
    setVotos(anecdotes[selected].votos)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [votos , selected])
  const getRandom = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (min > max) {
      return 0
    }
    return  Math.floor(Math.random() * max)
  }
  return (
    <div>
      <p>{anecdotes[selected].data}</p>
      <h3>{votos}</h3>
      <button
      onClick={() => {setSelected(getRandom(selected,anecdotes.length)); }}
      >
        Otra Anecdota
      </button>
      <button
      onClick={() => {setVotos(anecdotes[selected].votos += 1);}}
      >
       like
      </button>
  {featured.length >= 1
    ?<div>
    <p>{featured[0].data}</p>
    <h3>{featured[0].votos}</h3>
    </div>
    :'no hay'}
    </div>
  )
}
//Altere el arreglo de notas para tener mayor control de los votos 
const anecdotes = [
  {data:'If it hurts, do it more often', votos: 1},
  {data:'Adding manpower to a late software project makes it later!', votos: 0},
  {data:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votos: 0},
  {data:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votos: 0},
  {data:'Premature optimization is the root of all evil.', votos: 0},
  {data:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votos: 0}
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)