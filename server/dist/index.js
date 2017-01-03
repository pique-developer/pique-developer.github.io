'use strict';

require('babel-polyfill');

var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use('/build', express.static('build'))

var stripeEndpoint = require('./api/stripeEndpoint');
app.use('/api/stripe', stripeEndpoint);

app.get('*', function (req, res) {
  var filepath = path.join(__dirname, '..', '..', 'build', 'index.html');
  res.sendFile(fs.readFileSync(filepath).toString());
});

app.listen(process.env.PORT || 5000);