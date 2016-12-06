import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import { updateApplication } from 'api/actions'
import css from './style.css'

export class ScholarshipPostGeneral extends Component {
  constructor(props) {
    super(props)
    this.onChange = ::this.onChange
  }

  onChange(e) {
    const { name, value } = e.target
    this.props.updateApplication({[name]: value})
  }

  render() {
    const { title, description, minimumGPA, awardAmount, minimumSATScore, minimumACTScore, recommendationsOK, genericRecommendations } = this.props
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
                onChange={this.onChange}
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
                onChange={this.onChange}
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
                name='awardAmount'
                onChange={this.onChange}
                defaultValue='$'
                className={css.sm}
                type="text"/>
              <div className={css.link}>Add Another Award</div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Minimum GPA</div>
            <div className={css.field}>
              <input
                name='minimumGPA'
                onChange={this.onChange}
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
                name='minimumSATScore'
                onChange={this.onChange}
                className={css.sm}
                placeholder="SAT Score"
                type="text"/>
              <input
                name='minimumACTScore'
                onChange={this.onChange}
                className={css.sm}
                placeholder="ACT Score"
                type="text"/>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Generic Recommendations OK?</div>
            <div className={css.field}>
              <input
                name="recommendationsOK"
                onChange={this.onChange}
                className={css.sm}
                type="text"/>
              <div className={css.link}>Why accept a Generic Recommendation?</div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label}>Number of Generic Recommendations</div>
            <div className={css.field}>
              <input
                name="genericRecommendations"
                onChange={this.onChange}
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

export default connect(
  state => ({
    ...state.application
  }),
  { updateApplication }
)(ScholarshipPostGeneral)
