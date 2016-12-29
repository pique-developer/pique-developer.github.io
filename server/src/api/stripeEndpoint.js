const express = require('express')
const router = express.Router()

var config = require('./../../../config/get-pique-stripe.json')
var stripe = require('stripe')(config.test_secret_key)

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