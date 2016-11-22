import React from 'react'
import img from './902-cover-min.png'
import css from './style.css'

export const ApplicantCover = props => {
  return (
    <div className={css.root} style={{backgroundImage: `url(${img})`}} />
  )
}

export default ApplicantCover
