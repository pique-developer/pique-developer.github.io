import React, { Component } from 'react'
import { connect } from 'react-redux'
import IndividualScholarshipsApply from './Apply'
import css from './style.css'

export class IndividualScholarshipsFooter extends Component {
  render() {
    return (
      <div className={css.root}>
        <div className={css.section}>
          <div className={css.title}>Apply!</div>
          <IndividualScholarshipsApply />
        </div>
        <div className={css.section}>
          <div className={css.title}>A Word from Pique</div>
          <IndividualScholarshipsApply />
        </div>
        <div className={css.section}>
          <div className={css.title}>Required Supplemental Documents</div>
          <IndividualScholarshipsApply />
        </div>
        <div className={css.section}>
          <div className={css.title}>Scholarship Provider’s Mailing Address:</div>
          <IndividualScholarshipsApply />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state
  })
)(IndividualScholarshipsFooter)
