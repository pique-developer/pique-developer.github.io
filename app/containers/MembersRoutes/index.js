import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import MembersHeader from 'members/MembersHeader'
import Applicants from 'members/Applicants'
import SidePanel from 'members/SidePanel'

export class MembersRoutes extends Component {
  routes = [
    {pattern: '/', component: Applicants}
  ]

  render() {
  const { route } = this.props
  return route === '/signin'
    ? <Redirect to="/" />
    : <div>
        <MembersHeader />
        {this.routes.map((x, i) => <Match key={i} {...x} />)}
      </div>
  }
}

export default connect(
  state => ({
    user: state.auth.user,
    route: state.routing.route,
  })
)(MembersRoutes)
