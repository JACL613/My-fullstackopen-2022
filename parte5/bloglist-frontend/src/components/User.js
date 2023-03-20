import React from 'react'

export default function User ({ name, deleteToken }) {
  const handelClose = () => {
    window.localStorage.clear()
    deleteToken(null)
  }
  return (
    <div>
      <h2>Inicio de sesion de: {name}</h2>
      <button onClick={handelClose}>logout</button>
    </div>
  )
}
