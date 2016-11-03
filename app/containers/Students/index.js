import React from 'react'
import StudentsForm from './StudentsForm'
import StudentsDiagram from './StudentsDiagram'
import StudentsTimeline from './StudentsTimeline'
import StudentsJoin from './StudentsJoin'
import css from './style.css'

export const Students = props => {
  return (
    <div className={css.root}>
      <StudentsForm />
      <StudentsDiagram />
      <StudentsTimeline />
      <StudentsJoin />
    </div>
  )
}

export default Students