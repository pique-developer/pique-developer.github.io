import React from 'react'
import css from './style.css'

const Button = ({ className, children }) => {
  return (
    <button className={`${css.root} ${className ? className : ''}`}>
      {children}
    </button>
  )
}

export default Button
