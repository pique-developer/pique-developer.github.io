import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScholarshipPostBtns from '../ScholarshipPostBtns'
import { updateApplication } from 'api/actions'
import css from './style.css'

export class ScholarshipPostEssay extends Component {
  constructor(props) {
    super(props)
    this.onChange = ::this.onChange
    this.addField = ::this.addField
    this.removeField = ::this.removeField
  }

  state = {
    additionalFields: [],
    fieldId: 0,
  }

  onChange(e) {
    const { name, value } = e.target
    this.props.updateApplication({[name]: value})
  }

  addField() {
    const { additionalFields, fieldId } = this.state
    const id = fieldId + 1
    const name = `essay-${id}`
    this.setState({
      fieldId: id,
      additionalFields: additionalFields.concat([name])
    })
    this.props.updateApplication({[name]: ''})
  }

  removeField(name) {
    const { additionalFields } = this.state
    const nextState = additionalFields.filter(x => x !== name)
    this.setState({additionalFields: nextState})
    this.props.updateApplication({[name]: undefined})
  }

  render() {
    const { additionalFields } = this.state
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
              <div
                onClick={this.addField}
                className={css.link}>
                Add Another Required Essay
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

          {additionalFields.map((x, i) =>
            <AdditionalEssays
              key={x}
              name={x}
              num={i + 2}
              onChange={this.onChange}
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
        <div className={css.link}>
          Add Another Required Essay
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