import React, { Component } from 'react'
import img1 from './502-student.png'
import TimelineDots from './TimelineDots'
import css from './style.css'

export const StudentsTimeline = ({ positioning })=> {
  return (
    <div className={css.root}>
      <div className={css.header}>The Pique Way</div>
      <div className={css.timeline}>
        <img src={img1} className={css[positioning]} />
        <TimelineDots value={6} />
      </div>
    </div>
  )
}

export default StudentsTimeline
