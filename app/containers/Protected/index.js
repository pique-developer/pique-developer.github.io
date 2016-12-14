import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import AppHeader from './AppHeader'
import InviteModal from './InviteModal'
import MatchWhenNew from './MatchWhenNew'
import MatchWhenReturning from './MatchWhenReturning'
import AppRoutes from './AppRoutes'
import ScholarshipPost from './ScholarshipPost'
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
    const { isNew, applicants, user } = this.props
    return (
      <div>
        <AppHeader />
        <InviteModal />

        <div className={css.root}>
          <MatchWhenNew
            pattern='/'
            isNew={isNew}
            component={ScholarshipPost} />
          <MatchWhenReturning
            pattern='/'
            isNew={isNew}
            component={AppRoutes} />
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      applicants: state.app.applicants,
      user: state.auth.user,
      isNew: state.auth.isNew,
    }
  },
  Actions
)(MembersRoutes)
