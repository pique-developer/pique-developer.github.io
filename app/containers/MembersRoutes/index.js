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
  routes = [
    {pattern: '/', component: Applicants}
  ]

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
          <MembersSidebar />
          {this.routes.map((x, i) => <Match key={i} {...x} />)}
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
