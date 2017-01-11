import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import MatchWhenNew from './MatchWhenNew'
import MatchWhenReturning from './MatchWhenReturning'
import MatchWithSidebar from './MatchWithSidebar'
import MatchWithFullPage from './MatchWithFullPage'
import Applicant from '../Applicant'
import Dashboard from '../Dashboard'
import Committee from '../Committee'
import Settings from '../Settings'
import AppSidebar from 'containers/Protected/AppSidebar'
import StudentSidebar from 'containers/Protected/StudentSidebar'
import IndividualScholarships from '../IndividualScholarships'
import Discovery from '../Discovery'
import Payment from '../Payment'
import css from './style.css'

export class AppRoutes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <MatchWithFullPage
          routes={[
            {pattern: '/individual-scholarships', component: IndividualScholarships},
            {pattern: '/applicant/:id', component: Applicant},
            {pattern: '/payment',    component: Payment},
          ]} />

        <MatchWithSidebar
          routes={[
            {pattern: '/dashboard', component: Dashboard},
            {pattern: '/settings', component: Settings},
            {pattern: '/committee', component: Committee},
          ]}
          sidebar={AppSidebar} />

        <MatchWithSidebar
          routes={[
            {pattern: '/discovery', component: Discovery},
          ]}
          sidebar={StudentSidebar} />

        <Match pattern='/' exactly render={props =>
          <Redirect to='/dashboard/new' />
        } />
        <Match pattern='/signin' exactly render={props =>
          <Redirect to='/dashboard/new' />
        } />
      </div>
    )
  }
}

export default connect(
  state => ({
    applicants: state.app.applicants,
    user: state.auth.user,
    isNew: state.auth.isNew,
  })
)(AppRoutes)