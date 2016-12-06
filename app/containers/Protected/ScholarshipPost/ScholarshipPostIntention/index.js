import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import { updateApplication } from 'api/actions'
import css from './style.css'

export class ScholarshipPostIntention extends Component {
  constructor(props) {
    super(props)
    this.onChange = ::this.onChange
    this.addField = ::this.addField
    this.removeField = ::this.removeField
  }

  state = {
    locationLimitations: [],
    areasOfStudy: [],
    fieldId: 0,
  }

  onChange(e) {
    const { name, value } = e.target
    this.props.updateApplication({[name]: value})
  }

  addField(prefix) {
    const { fieldId } = this.state
    const fields = this.state[prefix]
    const id = fieldId + 1
    const name = `${prefix}-${id}`
    this.setState({
      fieldId: id,
      [prefix]: fields.concat([name])
    })
    this.props.updateApplication({[name]: ''})
  }

  removeField(name, prefix) {
    const fields = this.state[prefix]
    const nextState = fields.filter(x => x !== name)
    this.setState({[prefix]: nextState})
    this.props.updateApplication({[name]: undefined})
  }

  render() {
    const { areasOfStudy, locationLimitations } = this.state
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
              <input
                name="areasOfStudyRequirements"
                className={css.sm}
                type="text"/>
              <div
                onClick={_ => this.addField('areasOfStudy')}
                className={css.more}>Add Another Area of Study Requirement</div>
            </div>
          </div>

          {areasOfStudy.map(x =>
            <AdditionalAreasOfStudy
              key={x}
              name={x}
              onChange={this.onChange}
              onClick={_ => this.removeField(x, 'areasOfStudy')} />
          )}

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
                name="locationLimitationCity"
                className={css.sm}
                type="text"/>
              <input
                name="locationLimitationState"
                className={css.sm}
                type="text"/>
              <div
                onClick={_ => this.addField('locationLimitations')}
                className={css.link}>
                Add Another Location
              </div>
            </div>
          </div>
          {locationLimitations.map(x =>
            <AdditionalLocationLimitations
              key={x}
              name={x}
              onChange={this.onChange}
              onClick={_ => this.removeField(x, 'locationLimitations')} />
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

const AdditionalAreasOfStudy = ({ onChange, onClick, name }) => (
  <div className={css.row}>
    <div className={css.label} />
    <div className={css.field}>
      <input
        name={name}
        onChange={onChange}
        className={css.sm}
        type="text"/>
      <div
        onClick={onClick}
        className={css.remove}>X</div>
    </div>
  </div>
)

const AdditionalLocationLimitations = ({ onChange, onClick, name }) => (
  <div className={css.row}>
    <div className={css.label} />
    <div className={css.field}>
      <input
        name={`${name}City`}
        onChange={onChange}
        className={css.sm}
        type="text"/>
      <input
        name={`${name}State`}
        onChange={onChange}
        className={css.sm}
        type="text"/>
      <div
        onClick={onClick}
        className={css.remove}>X</div>
    </div>
  </div>
)

export default connect(
  state => ({
    ...state
  }),
  { updateApplication }
)(ScholarshipPostIntention)