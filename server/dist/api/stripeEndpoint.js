'use strict';

var express = require('express');
var router = express.Router();

var config = require('./../../../config/get-pique-stripe.json');
var stripe = require('stripe')(config.test_secret_key);

router.post('/charge', function (req, res) {
  var token = request.body.stripeToken;
  var charge = stripe.charges.create({
    amount: 1000,
    currency: 'usd',
    source: token,
    description: 'Example charge'
  }, function (err, charge) {
    if (err) {
      return res.send(500, { error: err });
    }
    return res.send(200);
  });
});

module.exports = router;