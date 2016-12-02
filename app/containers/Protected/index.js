import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import MembersHeader from './MembersHeader'
import Dashboard from './Dashboard'
import Applicant from './Applicant'
import Committee from './Committee'
import Settings from './Settings'
import ScholarshipPost from './ScholarshipPost'
import MembersSidebar from './MembersSidebar'
import MembersModal from './MembersModal'
import Redirect from 'components/Redirect'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class MembersRoutes extends Component {
  static defaultProps = {
    onboardingRoutes: [
      {pattern: '/scholarship-post', component: ScholarshipPost}
    ]
  }

  sidebar = [{
    title: 'Applications',
    links: [
      {to: '/dashboard/new', text: 'New'},
      {to: '/dashboard/reviewed', text: 'Reviewed'},
      {to: '/dashboard/interviewees', text: 'Interviewees'},
      {to: '/dashboard/finalists', text: 'Finalists'},
    ],
  },{
    title: 'Selection Committee',
    links: [
      {to: '/committee', text: 'Committee Page'},
      {text: 'Invite Members'},
    ],
  }]

  componentDidMount() {
    const { fetchSuccess, fetchError } = this.props
    API.fetchApplicants({
      next: applicants => fetchSuccess({ applicants }),
      error: e => fetchError({error: e}),
    })
  }

  render() {
    const { applicants, user, onboardingRoutes } = this.props

    return (
      <Redirect to="/dashboard/new" any={['/signin', '/']}>
        <MembersModal />
        <MembersHeader />

        <div className={css.root}>
          <MatchWhenOnBoarding
            pattern='/'
            user={user}
            links={this.sidebar}
            routes={onboardingRoutes} />
          <MatchWhenActive />
        </div>
      </Redirect>
    )
  }
}

const MatchWhenOnBoarding = ({ pattern, routes, ...rest }) => {
  return <Match
    pattern={pattern}
    render={props => {
    const match = routes.filter(x => x.pattern === props.location.pathname)[0]
    if (match) {
      const {component:Component, pattern} = match
      return <Component {...props} />
    } else {
      return <MembersSidebar {...props} {...rest} />
    }
  }} />
}

const MatchWhenActive = props => {
  return (
    <div className={css.main}>
      <Match pattern='/committee' component={Committee} />
      <Match pattern='/settings' component={Settings} />
      <Match pattern='/applicant' component={Applicant} />
      <Match pattern='/dashboard' component={Dashboard} />
    </div>
  )
}

export default connect(
  state => {
    return {
      applicants: state.app.applicants,
      user: state.auth.user,
    }
  },
  Actions
)(MembersRoutes)
