import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import ApplicantCover from './ApplicantCover'
import ApplicantHeader from './ApplicantHeader'
import ApplicantUploads from './ApplicantUploads'
import ApplicantComments from './ApplicantComments'
import ApplicantCommentInput from './ApplicantCommentInput'
import ApplicantQuestionnaire from './ApplicantQuestionnaire'
import css from './style.css'

export const Applicant = props => {
  return (
    <div className={css.root}>
      <ApplicantCover />
      <div className={css.profile}>
        <ApplicantHeader {...props} />
        <ApplicantUploads />
        <div className={css.board}>
          <ApplicantQuestionnaire {...props} />
          <ApplicantComments />
        </div>
      </div>
      <ApplicantCommentInput />
    </div>
  )
}

export default connect(
  (state, ownProps) => {
    const profile = state.app.applicants.new
      .filter(x => x.id === ownProps.params.id)[0]
    return {
      ...profile
    }
  }
)(Applicant)
