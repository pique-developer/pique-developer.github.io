import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import css from './style.css'

export class ScholarshipPostRequirements extends Component {
  render() {
    return (
      <div className={css.form}>
        <div className={css.title}>
          Supplemental Requirements
          <div className={css.caption}>Please list any supplemental materials and documents you require students to submit</div>
        </div>
        <div className={css.fields}>
          <div className={css.row}>
            <input
              className={css.sm}
              placeholder="Document Title"
              type="text" />
            <div className={css.link}>Add Another Required Document</div>
            <div className={css.info}>Add supplemental required documents i.e. 'Parents' W-2 Form'</div>
          </div>
        </div>

        <ScholarshipPostBtns back='/scholarship-post/intention' />
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state
  })
)(ScholarshipPostRequirements)