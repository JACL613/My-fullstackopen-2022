import React from 'react'

export default function Button({accion , labelButton}) {
  return (
    <button onClick={() => accion}>{labelButton}</button>
  )
}
