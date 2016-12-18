import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppHeader from './AppHeader'
import InviteModal from './InviteModal'
import AppRoutes from './AppRoutes'
import FormRoutes from './FormRoutes'
import * as API from 'api'
import { fetchSuccess, fetchError } from 'api/actions'
import css from './style.css'

export class MembersRoutes extends Component {
  componentDidMount() {
    const { fetchSuccess, fetchError } = this.props
    API.fetchApplicants({
      next: applicants => fetchSuccess({ applicants }),
      error: error => fetchError({ error }),
    })
  }

  render() {
    const { removeNav } = this.props
    return (
      <div>
        <InviteModal />
        {!removeNav ? <AppHeader /> : null}
        <div className={css.root}>
          <AppRoutes />
          <FormRoutes />
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
      removeNav: state.ui.removeNav,
    }
  },
  { fetchSuccess, fetchError }
)(MembersRoutes)
