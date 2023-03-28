import React, { useState } from 'react'

export default function FormLogin ({ newToken , login }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = (event) => {
    event.preventDefault()
    login({ username, password })
  
    setPassword('')
    setUsername('')
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login Form</h2>
      <div>
        username
        <input
          type='text'
          value={username}
          id='username'
          name='username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type='password'
          id='password'
          value={password}
          name='password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id='login-button' type='submit'>login</button>
    </form>
  )
}
