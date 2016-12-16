import React from 'react'
import Match from 'react-router/Match'
import ApplicantCover from './ApplicantCover'
import ApplicantProfile from './ApplicantProfile'
import ApplicantCommentInput from './ApplicantProfile/ApplicantCommentInput'
import css from './style.css'

export const Applicant = props => {
  return (
    <div>
      <ApplicantCover />
      <div className={css.profile}>
        <Match pattern='/applicant/:id' component={ApplicantProfile} />
      </div>
      <ApplicantCommentInput />
    </div>
  )
}

export default Applicant
