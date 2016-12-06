import React from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import ScholarshipPostGeneral from './ScholarshipPostGeneral'
import ScholarshipPostEssay from './ScholarshipPostEssay'
import ScholarshipPostIntention from './ScholarshipPostIntention'
import ScholarshipPostRequirements from './ScholarshipPostRequirements'
import { updateApplication } from 'api/actions'
import css from './style.css'

export const ScholarshipPost = ({ updateApplication }) => {
  return (
    <div className={css.root}>
      <div className={css.header}>Scholarship Application Post</div>
      <Match pattern='/scholarship-post/general' component={ScholarshipPostGeneral} />
      <Match pattern='/scholarship-post/essay' component={ScholarshipPostEssay} />
      <Match pattern='/scholarship-post/intention' component={ScholarshipPostIntention} />
      <Match pattern='/scholarship-post/requirements' component={ScholarshipPostRequirements} />
    </div>
  )
}

export default connect(
  state => ({
    ...state
  }),
  { updateApplication }
)(ScholarshipPost)
