import React, { Component } from 'react'
import { connect } from 'react-redux'
import PaymentBenefits from './PaymentBenefits'
import PaymentForm from './PaymentForm'
import StripeCheckout from 'react-stripe-checkout'
import logo from './logo.png'
import css from './style.css'

export class Payment extends Component {

  onToken = token => {
    fetch('/api/stripe/create-scholarship-provider', {
      method: 'POST',
      body: JSON.stringify({
        token: token,
        uid: 'DUMMY_VALUE_HERE'
      }),
    })
    .then(x => x.json())
    .then(x => console.log(`Supperz, ${x.email}`))
  }

  render() {
    return (
      <div className={css.root}>
        <div className={css.content}>
          <PaymentBenefits />

          <div className={css.stripe}>
            <StripeCheckout
              token={this.onToken}
              amount={15500}
              image={logo}
              name='Pique'
              description='Scholarship Provider'
              currency='USD'
              stripeKey='pk_live_SycH4swdyUp3M32ZCSkQ0Afy'>
              <div className={css.submit}>
                <button className={css.btn}>Get Started With Pique!</button>
              </div>
            </StripeCheckout>
          </div>
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
