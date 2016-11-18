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
        {routes.map((x, i) =>
          <Match {...x} render={({ isExact }) =>
            <div>
              <ApplicantsNav links={links} />

              {isExact
                ? <ApplicantCards {...x} items={applicants[x.key]} />
                : null
              }
            </div>
          }/>
        )}
      </div>
    </div>
  )
}

const links = [
  {to: '/',             key: 'new',          text: 'New Applicants', activeOnlyWhenExact: true},
  {to: '/reviewed',     key: 'reviewed',     text: 'Reviewed Applicants'},
  {to: '/interviewees', key: 'interviewees', text: 'Interviewees'},
  {to: '/finalists',    key: 'finalists',    text: 'Finalists'},
]

const routes = [
  {pattern: '/',             key: 'new', exactly: true},
  {pattern: '/reviewed',     key: 'reviewed'},
  {pattern: '/interviewees', key: 'interviewees'},
  {pattern: '/finalists',    key: 'finalists'},

]

export default connect(
  state => ({
    applicants: state.app.applicants,
  })
)(Applicants)