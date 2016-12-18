import React, { Component } from 'react'
import img from './banner.png'
import css from './style.css'

export class IndividualScholarships extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={css.root}>
        <div
          style={{backgroundImage: `url(${img})`}}
          className={css.bg}>
          <div className={css.logo}>

          </div>
        </div>
        <div className={css.content}>
          <div className={css.header}>MLK Scholarships</div>
        </div>
      </div>
    )
  }
}

export default IndividualScholarships
