import React, { Component } from 'react'
import IndividualScholarshipsBanner from './IndividualScholarshipsBanner'
import IndividualScholarshipsHeader from './IndividualScholarshipsHeader'
import IndividualScholarshipsPrompt from './IndividualScholarshipsPrompt'
import css from './style.css'

export class IndividualScholarships extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={css.root}>
        <IndividualScholarshipsBanner />
        <IndividualScholarshipsHeader />
        <IndividualScholarshipsPrompt number={1} />
        <IndividualScholarshipsPrompt number={2} />
      </div>

    )
  }
}

export default IndividualScholarships