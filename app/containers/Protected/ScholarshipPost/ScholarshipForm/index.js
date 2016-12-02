import React, { Component } from 'react'
import { connect } from 'react-redux'
import css from './style.css'

export class ScholarshipForm extends Component {
  render() {
    return (
      <div className={css.root}>
        <div className={css.header}>Scholarship Application Post</div>
        <div className={css.form}>
          <div className={css.title}>General Scholarship Details</div>
          <div className={css.fields}>
            <div className={css.row}>
              <div className={css.label}>Scholarship Title</div>
              <div className={css.field}>
                <input
                  className={css.input}
                  type="text"/>
              </div>
            </div>

            <div className={css.row}>
              <div className={css.label}>Description</div>
              <div className={css.field}>
                <textarea
                  className={css.tall}
                  rows="4"
                  type="text" />
              </div>
            </div>

            <div className={css.row}>
              <div className={css.label}>Award Size</div>
              <div className={css.field}>
                <input
                  className={css.sm}
                  type="text"/>
                <div className={css.link}>Add Another Award</div>
              </div>
            </div>

            <div className={css.row}>
              <div className={css.label}>Minimum GPA</div>
              <div className={css.field}>
                <input
                  className={css.sm}
                  type="text"/>
                <div className={css.info}>All GPAs are unweighted</div>
              </div>
            </div>

            <div className={css.row}>
              <div className={css.label}>Minimum Standard Test Scores</div>
              <div className={css.field}>
                <input
                  className={css.sm}
                  type="text"/>
                <input
                  className={css.sm}
                  type="text"/>
              </div>
            </div>

            <div className={css.row}>
              <div className={css.label}>Number of Required Recommendations</div>
              <div className={css.field}>
                <input
                  className={css.sm}
                  type="text"/>
              </div>
            </div>
          </div>

          <div className={css.title}>Essay Requirements</div>
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
)(ScholarshipForm)
