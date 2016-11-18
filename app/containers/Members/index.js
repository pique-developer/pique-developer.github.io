import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import MembersHeader from './MembersHeader'
import Applicants from './Applicants'
import Committee from './Committee'
import MembersSidebar from './MembersSidebar'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class MembersRoutes extends Component {


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
      ? <Redirect to="/dashboard/new" />
      : <div>
          <MembersHeader />
          <div className={css.root}>
            <MembersSidebar />
            <div className={css.main}>
              <div className={css.wrap}>
                <Match pattern="/dashboard" component={Applicants} />
                <Match pattern="/committee" component={Committee} />
              </div>
            </div>


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
