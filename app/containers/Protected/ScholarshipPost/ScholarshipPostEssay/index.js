import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import css from './style.css'

export class ScholarshipPostEssay extends Component {
  constructor(props) {
    super(props)
    this.onChange = ::this.onChange
  }

  onChange(e) {
    const { name, value } = e.target
    this.props.updateApplication({[name]: value})
  }

  render() {
    return (
      <div className={css.form}>
        <div className={css.title}>Essay Requirements</div>
        <div className={css.fields}>

          <div className={css.row}>
            <div className={css.label}>Number of Essays</div>
            <div className={css.field}>
              <input
                name="essays"
                onChange={this.onChange}
                className={css.sm}
                type="text"/>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.req}>Essay #1 Prompt</div>
            <div className={css.field}>
              <textarea
                name="essayPrompt"
                onChange={this.onChange}
                className={css.tall}
                rows="4"
                placeholder="Enter your scholarship's essay prompt here"
                type="text" />
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label} />
            <div className={css.field}>
              <div className={css.more}>
                Add Another Prompt or Essay #1
              </div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.req}>Essay#1 Word Limit</div>
            <div className={css.field}>
              <input
                name="essayWordLimit"
                onChange={this.onChange}
                className={css.sm}
                placeholder="e.g. 100"
                type="text"/>
              <div className={css.comment}>
                Keep in mind that ~250 words is equivalent to 1 typed page.
              </div>
            </div>
          </div>

        </div>

        <ScholarshipPostBtns
          back='/scholarship-post/general'
          next='/scholarship-post/intention' />
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state
  })
)(ScholarshipPostEssay)