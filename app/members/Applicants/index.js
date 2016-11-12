import React from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import ApplicantsNav from './ApplicantsNav'
import ApplicantCards from './ApplicantCards'
import css from './style.css'

export const Applicants = ({ applicants }) => {
  return (
    <div className={css.root}>
      <div className={css.wrap}>
        <ApplicantsNav />
        {routes.map(x =>
          <Match key={x.key} pattern={x.pattern} exactly={x.exactly} render={props =>
            <ApplicantCards {...props} items={applicants[x.key]} />
          } />
        )}
      </div>
    </div>
  )
}

const routes = [
  {pattern: '/',             key: 'new', exactly: true},
  {pattern: '/reviewed',     key: 'reviewed',   },
  {pattern: '/interviewees', key: 'interviewees'},
  {pattern: '/finalists',    key: 'finalists',  },
]

export default connect(
  state => ({
    applicants: state.app.applicants,
  })
)(Applicants)