import React, { Component } from 'react'
import { connect } from 'react-redux'
import css from './style.css'

export class ScholarshipPostEssay extends Component {
  render() {
    return (
      <div className={css.form}>
        <div className={css.title}>Essay Requirements</div>
        <div className={css.fields}>
          <div className={css.row}>
            <div className={css.label}>Essay #1 Prompt</div>
            <div className={css.field}>
              <textarea
                className={css.tall}
                rows="4"
                type="text" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state
  })
)(ScholarshipPostEssay)