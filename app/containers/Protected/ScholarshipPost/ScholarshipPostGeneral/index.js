import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import { updateApplication } from 'api/actions'
import css from './style.css'

export class ScholarshipPostGeneral extends Component {

  render() {
    const { awardAmounts } = this.props
    const {
      onChange, onGroupChange, addField, removeField,
      title, description, minGPA, minSATScore, minACTScore,
      recommendations, genericRecommendations } = this.props
    return (
      <div className={css.form}>
        <div className={css.title}>
          General Scholarship Details
          <span className={css.caption}>* Required</span>
        </div>

        <div className={css.fields}>
          <div className={css.row}>
            <div className={css.req}>Scholarship Title</div>
            <div className={css.field}>
              <input
                name="title"
                onChange={onChange}
                className={css.input}
                type="text"/>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.req}>Description</div>
            <div className={css.field}>
              <textarea
                name="description"
                className={css.tall}
                rows="4"
                onChange={onChange}
                placeholder="Describe your scholarship"
                type="text" />
            </div>
          </div>

          <div className={css.row}>
            <div className={css.req}>Scholarship Photo</div>
            <div className={css.field}>
              <input className={css.file} type="file"/>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.req}>Award Amount</div>
            <div className={css.field}>
              <input
                name={awardAmounts.name}
                onChange={onChange}
                value={awardAmounts.value}
                className={css.sm}
                type="text"/>
              <div
                onClick={_ => addField('awardAmounts')}
                className={css.link}>
                Add Another Award
              </div>
            </div>
          </div>

          {awardAmounts.children.map((x, i) =>
            <AddAmountField
              key={i}
              name={x.name}
              value={x.value}
              onChange={e => onGroupChange(e, 'awardAmounts')}
              onClick={_ => removeField(x.name, 'awardAmounts')} />
          )}

          <div className={css.row}>
            <div className={css.label}>Minimum GPA</div>
            <div className={css.field}>
              <input
                name='minGPA'
                onChange={onChange}
                className={css.sm}
                type="text"/>
              <div className={css.info}>All GPAs are unweighted</div>
              <div className={css.info}>Skip if you do not have a minimum GPA requirement</div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Minimum Composite Test Scores</div>
            <div className={css.field}>
              <input
                name='minSATScore'
                onChange={onChange}
                className={css.sm}
                placeholder="SAT Score"
                type="text"/>
              <input
                name='minACTScore'
                onChange={onChange}
                className={css.sm}
                placeholder="ACT Score"
                type="text"/>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Generic Recommendations OK?</div>
            <div className={css.field}>
              <label className={css.radio}>
              <input
                name="recommendations"
                value="true"
                onChange={onChange}
                type="radio"/>
                Yes
              </label>
              <label className={css.radio}>
              <input
                name="recommendations"
                value="false"
                onChange={onChange}
                type="radio"/>
                No
                </label>
              <div className={css.link}>Why accept a Generic Recommendation?</div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Number of Generic Recommendations</div>
            <div className={css.field}>
              <input
                name="genericRecommendations"
                onChange={onChange}
                className={css.sm}
                placeholder="0"
                type="text"/>
              <div className={css.info}>Skip if you do not require a recommendation</div>
            </div>
          </div>

        <ScholarshipPostBtns next='/scholarship-post/essay' />
        </div>
      </div>
    )
  }
}

const AddAmountField = ({ onChange, onClick, name, value }) => (
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
        onClick={onClick}
        className={css.remove}>X</div>
    </div>
  </div>
)

export default connect(
  state => ({
    ...state.application
  }),
  { updateApplication }
)(ScholarshipPostGeneral)
