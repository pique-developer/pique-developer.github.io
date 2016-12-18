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
import IndividualScholarships from '../IndividualScholarships'
import ScholarshipDiscovery from '../ScholarshipDiscovery'
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
            {pattern: '/scholarship-discovery', component: ScholarshipDiscovery},
            {pattern: '/applicant/:id', component: Applicant}
          ]} />

        <MatchWithSidebar
          routes={[
            {pattern: '/dashboard', component: Dashboard},
            {pattern: '/settings', component: Settings},
            {pattern: '/committee', component: Committee},
          ]}
          className={css.main} />

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