import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import css from './style.css'

export class ScholarshipPostIntention extends Component {
  render() {
    return (
      <div className={css.form}>
        <div className={css.title}>
          Who is this scholarship intended for?
          <span className={css.caption}>This helps us determine which students see your scholarship</span>
        </div>

        <div className={css.fields}>

          <div className={css.row}>
            <div className={css.req}>School Year Requirement</div>

            <div className={css.field}>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    High School Freshman
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    High School Junior
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    High School Sophmore
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    High School Senior
                </label>
              </div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.req}>U.S. Citizenship Requirement</div>
            <div className={css.field}>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    Yes
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    No
                </label>
              </div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Maximum Family Income</div>
            <div className={css.field}>
              <input
                className={css.sm}
                type="text"/>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Gender Requirement</div>
            <div className={css.field}>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    Female
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    Male
                </label>
              </div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Race/Ethnicity Requirements</div>
            <div className={css.field}>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    Black/African American
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    White/Caucasian
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    Asian/Pacific Islander
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    Hispanic/Latino
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    Native American
                </label>
              </div>
            </div>


          <div className={css.row}>
            <div className={css.label}>Degree/Program Type Sought</div>
            <div className={css.field}>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    2 Year Program
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    4 Year Program
                </label>
              </div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Areas of Study Requirements</div>
            <div className={css.field}>
              <input
                className={css.sm}
                type="text"/>
              <div className={css.more}>Add Another Area of Studey Requirement</div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Community Service Requirement</div>
            <div className={css.field}>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    Yes
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    type="checkbox"/>
                    No
                </label>
              </div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Location Scholarship is Limited To?</div>
            <div className={css.field}>
              <input
                className={css.sm}
                type="text"/>
              <input
                className={css.sm}
                type="text"/>
              <div className={css.link}>Add Another Location</div>
            </div>
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