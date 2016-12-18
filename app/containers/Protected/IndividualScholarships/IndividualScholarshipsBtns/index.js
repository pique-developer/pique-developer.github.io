import React from 'react'
import Link from 'react-router/Link'
import css from './style.css'

export const ButtonFill = ({ text, to, className }) => {
  return (
    <div className={css.root}>
      <Link
        to={to || '/'}
        className={`${css.fill} ${className ? className : ''}`}>
        {text}
      </Link>
    </div>
  )
}

export const ButtonNoFill = ({ text, to, className }) => {
  return (
    <div className={css.root}>
      <Link
        to={to || '/'}
        className={`${css.nofill} ${className ? className : ''}`}>
        {text}
      </Link>
    </div>
  )
}
