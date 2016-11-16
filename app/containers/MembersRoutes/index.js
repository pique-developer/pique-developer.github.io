import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import MembersHeader from 'members/MembersHeader'
import Applicants from 'members/Applicants'
import MembersSidebar from 'members/MembersSidebar'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class MembersRoutes extends Component {
  routes = {
    applicants: {
      title: 'Applications',
      routes: [
        {route: '/',             key: 'new',          caption: 'New Applicants',      alias: 'New', activeOnlyWhenExact: true, exactly: true},
        {route: '/reviewed',     key: 'reviewed',     caption: 'Reviewed Applicants', alias: 'Reviewed'},
        {route: '/interviewees', key: 'interviewees', caption: 'Interviewees'},
        {route: '/finalists',    key: 'finalists',    caption: 'Finalists'},
      ],
    },
    committee: {
      title: 'Selection Committee',
      routes: [
        {route: '/committee', key: 'committee', caption: 'Committee Page'},
        {route: '/invite',    key: 'invite',    caption: 'Invite Members'},
      ]
    }
  }

  componentDidMount() {
    const { fetchSuccess, fetchError } = this.props
    API.fetchApplicants({
      next: applicants => fetchSuccess({ applicants }),
      error: e => fetchError({error: e}),
    })
  }

  render() {
  const { route } = this.props
  return route === '/signin'
    ? <Redirect to="/" />
    : <div>
        <MembersHeader />
        <div className={css.content}>
          <MembersSidebar routes={this.routes} />
          <Match pattern="/" render={props =>
            <Applicants {...props} routes={this.routes.applicants.routes} />
          } />
        </div>
      </div>
  }
}

export default connect(
  state => ({
    user: state.auth.user,
    route: state.routing.route,
  }),
  Actions
)(MembersRoutes)
