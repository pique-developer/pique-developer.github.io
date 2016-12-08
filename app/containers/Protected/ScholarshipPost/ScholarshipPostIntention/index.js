import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import { updateApplication } from 'api/actions'
import css from './style.css'

export class ScholarshipPostIntention extends Component {
  constructor(props) {
    super(props)
    this.onChange = ::this.onChange
  }

  state = {
    areas: 1,
  }

  onChange(e) {
    const { selectedIndex } = e.target.options
    this.setState({areas: selectedIndex})
  }

  render() {
    const {
      locations, areasOfStudy,
      onChange, onGroupChange, addField, removeField } = this.props
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
                    name="schoolYear"
                    value="High School Freshman"
                    onChange={onChange}
                    type="checkbox"/>
                    High School Freshman
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="schoolYear"
                    value="High School Junior"
                    onChange={onChange}
                    type="checkbox"/>
                    High School Junior
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="schoolYear"
                    value="High School Sophmore"
                    onChange={onChange}
                    type="checkbox"/>
                    High School Sophmore
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="schoolYear"
                    value="High School Senior"
                    onChange={onChange}
                    type="checkbox"/>
                    High School Senior
                </label>
              </div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.req}>U.S. Citizenship Requirement</div>
            <div className={css.field}>
              <label className={css.radio}>
                <input
                  name="citizenship"
                  value="true"
                  onChange={onChange}
                  type="radio"/>
                  Yes
                </label>
                <label className={css.radio}>
                <input
                  name="citizenship"
                  value="false"
                  onChange={onChange}
                  type="radio"/>
                  No
              </label>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Maximum Family Income</div>
            <div className={css.field}>
              <input
                defaultValue='$'
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
              <select
                name="essays"
                onChange={this.onChange}
                className={css.sm}>
                <option value="1"></option>
                <option value="2">Microsoft Notepad</option>
                <option value="3">One Annual Push-Up</option>
                <option value="4">Toodles (McBoodles a plus but not required)</option>
                <option value="5">Dinner Enjoyment</option>
              </select>
              <div
                onClick={_ => addField('areasOfStudy')}
                className={css.more}>Add Another Area of Study Requirement</div>
            </div>
          </div>

          {areasOfStudy.children.map((x, i) =>
            <AdditionalAreasOfStudy
              key={x.name}
              name={x.name}
              value={x.value}
              first={i === 0}
              onChange={e => onGroupChange(e, 'areasOfStudy')}>
            </AdditionalAreasOfStudy>
          )}

          <div className={css.row}>
            <div className={css.label}>Community Service Requirement</div>
            <div className={css.field}>
              <label className={css.radio}>
                <input
                  name="communityService"
                  value="true"
                  onChange={onChange}
                  type="radio"/>
                  Yes
                </label>
                <label className={css.radio}>
                <input
                  name="communityService"
                  value="false"
                  onChange={onChange}
                  type="radio"/>
                  No
              </label>
            </div>
          </div>

          {locations.children.map((x, i) =>
            <AdditionalLocationLimitations
              key={x.name}
              name={x.name}
              value={x.value}
              first={i === 0}
              onChange={onGroupChange}>
              {i === 0
                ? <div
                    onClick={_ => addField('locations')}
                    className={css.link}>Add Another Location</div>
                : <div
                    onClick={_ => removeField(x.name, 'locations')}
                    className={css.remove}>X</div>}
            </AdditionalLocationLimitations>

          )}

          </div>
        </div>

        <ScholarshipPostBtns
          back='/scholarship-post/essay'
          next='/scholarship-post/requirements' />
      </div>
    )
  }
}

const AdditionalAreasOfStudy = ({ onChange, onClick, name, value, children }) => {
  return (
    <div className={css.row}>
      <div className={css.label} />
      <div className={css.field}>
        <input
          name={name}
          onChange={onChange}
          value={value}
          className={css.sm}
          type="text"/>
          <div
            onClick={_ => removeField(x.name, 'areasOfStudy')}
            className={css.remove}>X</div>
      </div>
    </div>
  )
}

const AdditionalLocationLimitations = ({ onChange, onClick, name, value, first, children }) => {
  return (
    <div className={css.row}>
      {first
        ? <div className={css.label}>Location Scholarship is Limited To?</div>
        : <div className={css.label} />}
      <div className={css.field}>
        <input
          name={`${name}.city`}
          onChange={e => onChange(e, 'locations')}
          value={value.city}
          className={css.sm}
          type="text"/>
        <input
          name={`${name}.state`}
          onChange={e => onChange(e, 'locations')}
          value={value.state}
          className={css.sm}
          type="text"/>
        {children}
      </div>
    </div>
  )
}

export default connect(
  state => ({
    ...state
  }),
  { updateApplication }
)(ScholarshipPostIntention)