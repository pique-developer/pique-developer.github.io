import React from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import ApplicantsNav from './ApplicantsNav'
import ApplicantCards from './ApplicantCards'
import css from './style.css'

export const Applicants = ({ applicants, routes }) => {
  return (
    <div className={css.root}>
      <div className={css.wrap}>
        <ApplicantsNav routes={routes} />
        {routes.map(x =>
          <Match key={x.key} pattern={x.route} exactly={x.exactly} render={props =>
            <ApplicantCards {...props} items={applicants[x.key]} />
          } />
        )}
      </div>
    </div>
  )
}



export default connect(
  state => ({
    applicants: state.app.applicants,
  })
)(Applicants)