import React, { Component } from 'react'
import { connect } from 'react-redux'
import ApplicantHeader from './ApplicantHeader'
import ApplicantUploads from './ApplicantUploads'
import ApplicantComments from './ApplicantComments'
import ApplicantQuestionnaire from './ApplicantQuestionnaire'
import css from './style.css'

export class ApplicantProfile extends Component {
  render() {
    return (
      <div className={css.root}>
        <ApplicantHeader {...this.props} />
        <ApplicantUploads />
        <div className={css.board}>
          <ApplicantQuestionnaire {...this.props} />
          <ApplicantComments />
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const profile = state.app.applicants.new
      .filter(x => x.id === ownProps.params.id)[0]
    return {
      ...profile
    }
  }
)(ApplicantProfile)
