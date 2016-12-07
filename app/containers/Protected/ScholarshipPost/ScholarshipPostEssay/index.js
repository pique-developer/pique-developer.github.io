import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import { updateApplication } from 'api/actions'
import css from './style.css'

export class ScholarshipPostEssay extends Component {
  constructor(props) {
    super(props)
    this.onChange = ::this.onChange
  }

  state = {
    essays: 1,
  }

  onChange(e) {
    const { selectedIndex } = e.target.options
    this.setState({essays: selectedIndex})
  }

  render() {
    const { essays } = this.state
    const { onChange } = this.props
    return (
      <div className={css.form}>
        <div className={css.title}>Essay Requirements</div>
        <div className={css.fields}>

          <div className={css.row}>
            <div className={css.label}>Number of Essays</div>
            <div className={css.field}>
              <select
                name="essays"
                onChange={this.onChange}
                className={css.sm}
                type="text">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.req}>Essay #1 Prompt</div>
            <div className={css.field}>
              <textarea
                name="essayPrompt"
                onChange={onChange}
                className={css.tall}
                rows="4"
                placeholder="Enter your scholarship's essay #1 prompt here"
                type="text" />
            </div>
          </div>

          <div className={css.row}>
            <div className={css.label} />
            <div className={css.field}>
              <div className={css.link}>
                Add Another Prompt or Essay #1
              </div>
            </div>
          </div>

          <div className={css.row}>
            <div className={css.req}>Essay #1 Word Limit</div>
            <div className={css.field}>
              <input
                name="essayWordLimit"
                onChange={onChange}
                className={css.sm}
                placeholder="e.g. 100"
                type="text"/>
              <div className={css.comment}>
                Keep in mind that ~250 words is equivalent to 1 typed page.
              </div>
            </div>
          </div>

          {Array.from({length: essays}).map((x, i) =>
            <AdditionalEssays
              key={i}
              name={x}
              num={i + 2}
              onChange={onChange}
              onClick={_ => this.removeField(x)} />
          )}
        </div>

        <ScholarshipPostBtns
          back='/scholarship-post/general'
          next='/scholarship-post/intention' />
      </div>
    )
  }
}

const AdditionalEssays = ({ onChange, onClick, name, num }) => (
  <div>
    <div className={css.row}>
      <div className={css.req}>{`Essay #${num} Prompt`}</div>
      <div className={css.field}>
        <textarea
          name={name}
          onChange={onChange}
          className={css.tall}
          rows="4"
          placeholder={`Enter your scholarship's essay #${num} prompt here`}
          type="text" />
      </div>
    </div>
    <div className={css.row}>
      <div className={css.label} />
      <div className={css.field}>
        <div className={css.link}>
          {`Add Another Prompt or Essay #${num}`}
        </div>
      </div>
    </div>

    <div className={css.row}>
      <div className={css.req}>{`Essay #${num} Word Limit`}</div>
      <div className={css.field}>
        <input
          name="essayWordLimit"
          onChange={onChange}
          className={css.sm}
          placeholder="e.g. 100"
          type="text"/>
        <div className={css.comment}>
          Keep in mind that ~250 words is equivalent to 1 typed page.
        </div>
      </div>
    </div>
  </div>
)

export default connect(
  state => ({
    ...state
  }),
  { updateApplication }
)(ScholarshipPostEssay)