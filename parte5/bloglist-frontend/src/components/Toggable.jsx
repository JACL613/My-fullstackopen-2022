import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Toggable ({ buttonLabel, children }) {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  return (
    <div>
      <div style={hideWhenVisible}>
        <button className='buttonShowToggable' onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        {children}
        <button onClick={toggleVisibility}>Close</button>
      </div>
    </div>
  )
}
Toggable.prototype = {
  buttonLabel: PropTypes.string.isRequired
}
