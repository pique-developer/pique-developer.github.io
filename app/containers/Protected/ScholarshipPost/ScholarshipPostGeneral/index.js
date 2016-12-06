import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import css from './style.css'

export class ScholarshipPostGeneral extends Component {
  render() {
    return (
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

        <ScholarshipPostBtns next='/scholarship-post/essay' />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state
  })
)(ScholarshipPostGeneral)
