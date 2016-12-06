import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import css from './style.css'

export class ScholarshipPostIntention extends Component {
  render() {
    return (
      <div className={css.form}>
        <div className={css.title}>Who is this scholarship intended for?</div>
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

        <ScholarshipPostBtns
          back='/scholarship-post/essay'
          next='/scholarship-post/requirements' />
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state
  })
)(ScholarshipPostIntention)