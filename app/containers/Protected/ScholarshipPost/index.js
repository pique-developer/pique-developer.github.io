import React from 'react'
import { connect } from 'react-redux'
import ScholarshipForm from './ScholarshipForm'
// import css from './style.css'

export const ScholarshipPost = props => {
  return (
    <div>
      <ScholarshipForm />
    </div>
  )
}

export default connect(
  state => ({
    ...state
  })
)(ScholarshipPost)
