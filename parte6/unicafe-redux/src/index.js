import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const moreGood = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
const moreOk = () => {
  store.dispatch({
    type: 'OK'
  })
}
const moreBad = () => {
  store.dispatch({
    type: 'BAD'
  })
}
const accionReset = () => {
  store.dispatch({
    type: 'ZERO'
  })
}
  return (
    <div>
      <button onClick={moreGood}>good</button> 
      <button onClick={moreOk}>ok</button> 
      <button onClick={moreBad}>bad</button>
      <button onClick={accionReset}>reset stats</button>
      <div>good: {store.getState().good}</div>
      <div>ok: {store.getState().ok}</div>
      <div>bad: {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
