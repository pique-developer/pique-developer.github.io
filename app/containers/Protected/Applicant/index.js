import React from 'react'
import Match from 'react-router/Match'
import ApplicantCover from './ApplicantCover'
import ApplicantProfile from './ApplicantProfile'

export const Applicant = props => {
  return (
    <div>
      <ApplicantCover />
      <div className='wrap'>
        <Match pattern='/applicant/:id' component={ApplicantProfile} />
      </div>
    </div>
  )
}

export default Applicant
