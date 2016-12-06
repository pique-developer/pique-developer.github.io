import React from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import ScholarshipPostGeneral from './ScholarshipPostGeneral'
import ScholarshipPostEssay from './ScholarshipPostEssay'
import css from './style.css'

export const ScholarshipPost = props => {
  return (
    <div className={css.root}>
      <div className={css.header}>Scholarship Application Post</div>
        <Match pattern='/scholarship-post/general' component={ScholarshipPostGeneral} />
        <Match pattern='/scholarship-post/essay' component={ScholarshipPostEssay} />
    </div>
  )
}

export default connect(
  state => ({
    ...state
  })
)(ScholarshipPost)
