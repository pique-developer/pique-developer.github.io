import React, { Component } from 'react'
import { connect } from 'react-redux'
import PaymentBenefits from './PaymentBenefits'
import PaymentForm from './PaymentForm'
import css from './style.css'

export class Payment extends Component {
  render() {
    return (
      <div className={css.root}>
        <div className={css.content}>
          <PaymentBenefits />
          <PaymentForm />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state
  })
)(Payment)
