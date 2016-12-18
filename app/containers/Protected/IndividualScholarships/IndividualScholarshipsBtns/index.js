import React from 'react'
import Link from 'react-router/Link'
import css from './style.css'

export const ButtonFill = ({ text, to, className }) => {
  return (
    <Link
      to='/'
      className={`${css.fill} ${className ? className : ''}`}>
      {text}
    </Link>
  )
}

export const ButtonNoFill = ({ text, to, className }) => {
  return (
    <Link
      to='/'
      className={`${css.nofill} ${className ? className : ''}`}>
      {text}
    </Link>
  )
}
