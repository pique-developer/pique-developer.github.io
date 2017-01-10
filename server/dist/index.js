'use strict';

require('babel-polyfill');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var publicPath = '/';
var outputPath = path.resolve(__dirname, '..', '..', 'build');

app.use(publicPath, express.static(outputPath));
app.use(bodyParser.json());

var stripeEndpoint = require('./api/stripeEndpoint');
app.use('/api/stripe', stripeEndpoint);

var usersEndpoint = require('./api/users');
app.use('/api/users', usersEndpoint);

app.get('*', function (req, res) {
  res.sendFile(path.resolve(outputPath, 'index.html'));
});

app.listen(process.env.PORT || 5000);