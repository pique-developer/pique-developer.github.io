'use strict';

var express = require('express');
var router = express.Router();

var stripe_test_secret_key = process.env.NODE_ENV == 'production' ? process.env.stripe_test_secret_key : require('./../../../config/stripe.json').stripe_test_secret_key;
var stripe = require('stripe')(stripe_test_secret_key);

var firebase_admin = require('firebase-admin');
var firebase_db = firebase_admin.database();

/*
POST /api/stripe/create-scholarship-provider

Sign up a provider in Stripe, charge them, and subscribe to an annual plan

Input: 
{
  token<String>: A Stripe token generated by Stripe Checkout,
  uid<String>: A user's Firebase UID
}

Output: 
HTTP 200 OK: null
HTTP 500 ERR: {
  error<Object>: An error object
}
*/
router.post('/create-scholarship-provider', function (req, res) {
  var stripe_token = request.body.token;
  var uid = request.body.uid;

  firebase_admin.auth().getUser(uid).then(function (user_record) {
    // validate user exists and create a new Stripe customer
    return stripe.customers.create({
      source: stripe_token,
      description: user_record.email,
      email: user_record.email,
      metadata: {
        uid: uid
      }
    });
  }).then(function (customer) {
    // subscribe new customer to annual plan
    return stripe.subscriptions.create({
      customer: customer.id,
      plan: 'scholarship-provider-annual'
    });
  }).then(function (subscription) {
    // store user-customer relationship in Firebase
    var db_ref = process.env.NODE_ENV == 'production' ? 'server/prod-stripe' : 'server/test-stripe';

    var db_delta = {};
    db_delta[uid] = customer.id;

    return firebase_db.ref(db_ref).child('user-customer-link').set(db_delta);
  }).then(function () {
    res.send(200);
  }).catch(function (err) {
    res.send(500, { error: err });
  });
});

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'server/src/api/stripeEndpoint.js');

  __REACT_HOT_LOADER__.register(stripe_test_secret_key, 'stripe_test_secret_key', 'server/src/api/stripeEndpoint.js');

  __REACT_HOT_LOADER__.register(stripe, 'stripe', 'server/src/api/stripeEndpoint.js');

  __REACT_HOT_LOADER__.register(firebase_db, 'firebase_db', 'server/src/api/stripeEndpoint.js');
}();

;