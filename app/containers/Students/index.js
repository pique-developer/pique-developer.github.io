import React from 'react'
import StudentsForm from './StudentsForm'
import StudentsDiagram from './StudentsDiagram'
import StudentsTimeline from './StudentsTimeline'
import StudentsJoin from './StudentsJoin'

export const Students = props => {
  return (
    <div>
      <StudentsForm />
      <StudentsDiagram />
      <StudentsTimeline />
      <StudentsJoin />
    </div>
  )
}

export default Students
