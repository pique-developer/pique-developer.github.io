import React from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import ApplicantsNav from './ApplicantsNav'
import ApplicantCards from './ApplicantCards'
import css from './style.css'

export const Applicants = ({ applicants }) => {
  return (
    <div>
      <ApplicantsNav />
      {routes.map((x, i) =>
        <Match {...x} render={props =>
          <ApplicantCards items={applicants[x.key]} />
        } />
      )}
    </div>
  )
}

const routes = [
  {pattern: '/dashboard/new',          key: 'new'},
  {pattern: '/dashboard/reviewed',     key: 'reviewed'},
  {pattern: '/dashboard/interviewees', key: 'interviewees'},
  {pattern: '/dashboard/finalists',    key: 'finalists'},
]

export default connect(
  state => ({
    applicants: state.app.applicants,
  })
)(Applicants)