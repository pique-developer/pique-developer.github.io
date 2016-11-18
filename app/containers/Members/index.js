import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Redirect from 'react-router/Redirect'
import MembersHeader from './MembersHeader'
import Applicants from './Applicants'
import Committee from './Committee'
import MembersSidebar from './MembersSidebar'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class MembersRoutes extends Component {
  sidebarLinks = [{
      title: 'Applications',
      links: [
        {to: '/',             text: 'New', activeOnlyWhenExact: true},
        {to: '/reviewed',     text: 'Reviewed'},
        {to: '/interviewees', text: 'Interviewees'},
        {to: '/finalists',    text: 'Finalists'},
      ],
    },{
      title: 'Selection Committee',
      links: [
        {to: '/committee', text: 'Committee Page'},
        {to: '/invite',    text: 'Invite Members'},
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
    const { route } = this.props
    return route === '/signin'
      ? <Redirect to="/" />
      : <div>
          <MembersHeader />
          <div className={css.root}>
            <MembersSidebar items={this.sidebarLinks} />
            <Match pattern="/committee" component={Committee} />
            <Match pattern="/reviewed" component={Applicants} />
            <Match pattern="/interviewees" component={Applicants} />
            <Match pattern="/finalists" component={Applicants} />
            <Match pattern="/" component={Applicants} exactly />
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
