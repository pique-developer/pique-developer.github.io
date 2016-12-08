import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import { updateApplication } from 'api/actions'
import css from './style.css'

export class ScholarshipPostIntention extends Component {
  constructor(props) {
    super(props)
    this.onCheckboxChange = ::this.onCheckboxChange
    this.updateForm = ::this.updateForm
  }

  state = {
    areas: 1,
  }

  onCheckboxChange(e) {
    const { name, value } = e.target
    const group = this.props[name]
    this.updateForm({[name]: {...group, [value]: !group[value]} })
  }

  updateForm(nextState) {
    this.props.onUpdate(nextState)
  }

  render() {
    const {
      locations, areasOfStudy, schoolYear, genderRequirement, citizenship,
      ethnicity, degreeType, communityService, onChange, onGroupChange,
      addField, removeField } = this.props
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
                    value="freshman"
                    checked={schoolYear.freshman}
                    onChange={this.onCheckboxChange}
                    type="checkbox"/>
                    High School Freshman
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="schoolYear"
                    value="junior"
                    checked={schoolYear.junior}
                    onChange={this.onCheckboxChange}
                    type="checkbox"/>
                    High School Junior
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="schoolYear"
                    value="sophmore"
                    checked={schoolYear.sophmore}
                    onChange={this.onCheckboxChange}
                    type="checkbox"/>
                    High School Sophmore
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="schoolYear"
                    value="senior"
                    checked={schoolYear.senior}
                    onChange={this.onCheckboxChange}
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
                  onChange={_ => this.updateForm({citizenship: true})}
                  checked={citizenship === true}
                  type="radio"/>
                  Yes
                </label>
                <label className={css.radio}>
                <input
                  name="citizenship"
                  value="false"
                  onChange={_ => this.updateForm({citizenship: false})}
                  checked={citizenship === false}
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
                    name="genderRequirement"
                    value="female"
                    checked={genderRequirement.female}
                    onChange={this.onCheckboxChange}
                    type="checkbox"/>
                    Female
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="genderRequirement"
                    value="male"
                    checked={genderRequirement.male}
                    onChange={this.onCheckboxChange}
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
                    name="ethnicity"
                    value="blackAfricanAmerican"
                    onChange={this.onCheckboxChange}
                    checked={ethnicity.blackAfricanAmerican}
                    type="checkbox"/>
                    Black/African American
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="ethnicity"
                    value="whiteCaucasian"
                    onChange={this.onCheckboxChange}
                    checked={ethnicity.whiteCaucasian}
                    type="checkbox"/>
                    White/Caucasian
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="ethnicity"
                    value="asianPacificIslander"
                    onChange={this.onCheckboxChange}
                    checked={ethnicity.asianPacificIslander}
                    type="checkbox"/>
                    Asian/Pacific Islander
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="ethnicity"
                    value="hispanicLatino"
                    onChange={this.onCheckboxChange}
                    checked={ethnicity.hispanicLatino}
                    type="checkbox"/>
                    Hispanic/Latino
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="ethnicity"
                    value="nativeAmerican"
                    onChange={this.onCheckboxChange}
                    checked={ethnicity.nativeAmerican}
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
                    name="degreeType"
                    value="twoYear"
                    onChange={this.onCheckboxChange}
                    checked={degreeType.twoYear}
                    type="checkbox"/>
                    2 Year Program
                </label>
              </div>
              <div className={css.checkbox}>
                <label>
                  <input
                    name="degreeType"
                    value="fourYear"
                    onChange={this.onCheckboxChange}
                    checked={degreeType.fourYear}
                    type="checkbox"/>
                    4 Year Program
                </label>
              </div>
            </div>
          </div>

          {areasOfStudy.children.map((x, i) =>
            <div key={x.name} className={css.row}>
              {i > 0
                  ? <div className={css.label} />
                  : <div className={css.label}>Areas of Study Requirements</div>}
              <div className={css.field}>
                <select
                  name={x.name}
                  value={x.value}
                  onChange={e => onGroupChange(e, 'areasOfStudy')}
                  className={css.sm}>
                  <option value="">Choose area</option>
                  <option value="Microsoft Notepad">Microsoft Notepad</option>
                  <option value="One Annual Push-Up">One Annual Push-Up</option>
                  <option value="Toodles (McBoodles a plus but not required)">Toodles (McBoodles a plus but not required)</option>
                  <option value="Dinner Enjoyment">Dinner Enjoyment</option>
                </select>
                {i > 0
                  ? <div
                      onClick={_ => removeField(x.name, 'areasOfStudy')}
                      className={css.remove}>X</div>
                  : <div
                      onClick={_ => addField('areasOfStudy')}
                      className={css.more}>
                      Add Another Area of Study Requirement
                    </div>}
              </div>
            </div>
          )}

          <div className={css.row}>
            <div className={css.label}>Community Service Requirement</div>
            <div className={css.field}>
              <label className={css.radio}>
                <input
                  name="communityService"
                  value="true"
                  onChange={_ => this.updateForm({communityService: true})}
                  checked={communityService === true}
                  type="radio"/>
                  Yes
                </label>
                <label className={css.radio}>
                <input
                  name="communityService"
                  value="false"
                  onChange={_ => this.updateForm({communityService: false})}
                  checked={communityService === false}
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