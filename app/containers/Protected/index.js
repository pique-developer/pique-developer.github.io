import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import MembersHeader from './MembersHeader'
import DashboardNav from './Dashboard/DashboardNav'
import DashboardCards from './Dashboard/DashboardCards'
import ApplicantCover from './Applicant/ApplicantCover'
import ApplicantProfile from './Applicant/ApplicantProfile'
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

  dashboard = {
    routes: [
      {pattern: '/dashboard/new',          key: 'new'},
      {pattern: '/dashboard/reviewed',     key: 'reviewed'},
      {pattern: '/dashboard/interviewees', key: 'interviewees'},
      {pattern: '/dashboard/finalists',    key: 'finalists'},
    ],
    links: [
      {to: '/dashboard/new', key: 'new', text: 'New Applicants'},
      {to: '/dashboard/reviewed', key: 'reviewed', text: 'Reviewed Applicants'},
      {to: '/dashboard/interviewees', key: 'interviewees', text: 'Interviewees'},
      {to: '/dashboard/finalists', key: 'finalists', text: 'Finalists'},
    ]
  }

  componentDidMount() {
    const { fetchSuccess, fetchError } = this.props
    API.fetchApplicants({
      next: applicants => fetchSuccess({ applicants }),
      error: e => fetchError({error: e}),
    })
  }

  render() {
    const { applicants, user } = this.props
    const { links, routes } = this.dashboard
    const dashNav = links.map(x => ({...x, count: applicants[x.key].length}))
    const dashRoutes = routes.map(x => ({...x, items: applicants[x.key]}))
    return (
      <Redirect to="/dashboard/new" any={['/signin', '/']}>
        <MembersModal />
        <MembersHeader />

        <div className={css.root}>
          <MembersSidebar user={user} links={this.sidebar} />

          <UnconstrainedContent>
            <Match pattern="/applicant" component={ApplicantCover} />
            <Match pattern="/scholarship-post" component={ScholarshipPost} />

            <ConstrainedContent>
              <Match pattern="/committee" component={Committee} />
              <Match pattern="/settings" component={Settings} />
              <Match pattern="/applicant/:id" component={ApplicantProfile} />
              <Match pattern="/dashboard" render={props =>
                <DashboardNav {...props} links={dashNav} />
              } />
              {dashRoutes.map(x =>
                <Match key={x.key} pattern={x.pattern} render={props =>
                  <DashboardCards {...props} items={x.items} />
                } />
              )}
            </ConstrainedContent>

          </UnconstrainedContent>
        </div>
      </Redirect>
    )
  }
}

const UnconstrainedContent = ({ children }) => {
  return (
    <div className={css.main}>
      {children}
    </div>
  )
}

const ConstrainedContent = ({ children }) => {
  return (
    <div className={css.wrap}>
      {children}
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
