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
import StudentQuestionnaire from './StudentQuestionnaire'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class MembersRoutes extends Component {
  constructor(props) {
    super(props)
    this.getNewUserForm = ::this.getNewUserForm
  }

  componentDidMount() {
    const { fetchSuccess, fetchError } = this.props
    API.fetchApplicants({
      next: applicants => fetchSuccess({ applicants }),
      error: e => fetchError({error: e}),
    })
  }

  getNewUserForm() {
    const { type } = this.props.user
    switch (type) {
      case 'provider':
        return {
          component: ScholarshipPost,
          pathname: '/scholarship-post/general',
        }
      case 'student':
      default:
        return {
          component: StudentQuestionnaire,
          pathname: '/student-questionnaire',
        }
    }
  }

  render() {
    const { isNew } = this.props
    const { component, pathname } = this.getNewUserForm()
    return (
      <div>
        <AppHeader />
        <InviteModal />
        <div className={css.root}>
          <MatchWhenNew
            pattern='/'
            isNew={isNew}
            component={component} />
          <MatchWhenReturning
            pattern='/'
            isNew={isNew}
            component={AppRoutes}
            pathname={pathname} />
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
