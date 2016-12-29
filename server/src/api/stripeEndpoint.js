const express = require('express')
const router = express.Router()

const stripe_test_secret_key = 
  process.env.NODE_ENV == 'production' ? 
  process.env.stripe_test_secret_key : 
  require('./../../../config.json').stripe_test_secret_key
const stripe = require('stripe')(stripe_test_secret_key)

router.post('/charge', (req, res) => {
  const token = request.body.stripeToken
  const charge = stripe.charges.create({
    amount: 1000,
    currency: 'usd',
    source: token,
    description: 'Example charge'
  }, (err, charge) => {
    if (err) {
      return res.send(500, { error: err })
    }
    return res.send(200)
  })
})

module.exports = router