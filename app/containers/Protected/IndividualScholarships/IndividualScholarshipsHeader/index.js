import React, { Component } from 'react'
import { ButtonFill } from '../IndividualScholarshipsBtns'
import css from './style.css'

export class IndividualScholarshipsHeader extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit mi nec sapien ullamcorper porttitor. Phasellus sed placerat orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit mi nec sapien ullamcorper porttitor. Phasellus sed placerat orci.`
  }

  render() {
    const { description } = this.props
    return (
      <div className={css.root}>
        <div className={css.header}>MLK Scholarships</div>
        <div className={css.copy}>
          {description} <span className={css.more}>Read More</span>
        </div>

        <div className={css.btns}>
          <ButtonFill to='/' text='Save' />
        </div>
      </div>
    )
  }
}

export default IndividualScholarshipsHeader
