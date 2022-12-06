import React from 'react'

export default function Notification({message , style}) {
  return (
    <div >{message ? <div className={style}>{message}</div> : null}</div>
  )
}
