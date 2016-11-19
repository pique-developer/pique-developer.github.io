import React, { Component } from 'react'
import { connect } from 'react-redux'
import ApplicantHeader from './ApplicantHeader'
import ApplicantUploads from './ApplicantUploads'
import ApplicantComments from './ApplicantComments'
import Rating from 'components/Rating'
import css from './style.css'

export class ApplicantProfile extends Component {
  render() {
    const { name, description, image, city, state, firstname } = this.props
    return (
      <div className={css.root}>
        <ApplicantHeader {...this.props} />
        <ApplicantUploads />




        <div className={css.board}>
          <ApplicantComments />

          <div className={css.btns}>
            <div className={css.rate}>
              <div className={css.question}>
                {`How would you rate ${firstname}?`}
              </div>
              <div className={css.rating}>
                <Rating value="0" />
              </div>
            </div>
            <div className={css.rate}>
              <div className={css.question}>
                {`Should ${firstname} be a finalist?`}
              </div>
              <div className={css.inputs}>
              <label className={css.label}>
                <input className={css.radio} type="radio" />
                Yes
              </label>
              <label className={css.label}>
                <input className={css.radio} type="radio" />
                No
              </label>
              </div>
            </div>
          </div>

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
