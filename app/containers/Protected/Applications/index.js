import React from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import ScholarshipForm from './ScholarshipForm'
// import css from './style.css'

export const Applications = props => {
  return (
    <div>
      <Match pattern='scholarship' component={ScholarshipForm} />
    </div>
  )
}

export default connect(
  state => ({
    ...state
  })
)(Applications)
