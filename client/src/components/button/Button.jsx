import React from 'react'
import "./button.css"

function Button({text,className}) {
  return (
    <div className={className}>{text}</div>
  )
}

export default Button