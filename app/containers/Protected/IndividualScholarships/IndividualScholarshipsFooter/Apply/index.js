import React, { Component } from 'react'
import { connect } from 'react-redux'
import css from './style.css'

export class IndividualScholarshipsApply extends Component {
  render() {
    return (
      <div className={css.root}>
        <div className={css.copy}>Select the items from your Pique Proflie you would like to use to apply to the MLK Scholarship. Your ‘cover letter’ and ‘official transcript’ will automatically be sent with your application.</div>
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state
  })
)(IndividualScholarshipsApply)
