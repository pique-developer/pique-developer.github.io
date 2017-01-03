'use strict';

require('babel-polyfill');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var stripeEndpoint = require('./api/stripeEndpoint');

var app = express();

var publicPath = '/';
var outputPath = path.resolve(__dirname, '..', '..', 'build');

app.use(publicPath, express.static(outputPath));
app.use(bodyParser.json());
app.use('/api/stripe', stripeEndpoint);

app.get('*', function (req, res) {
  res.sendFile(path.resolve(outputPath, 'index.html'));
});

app.listen(process.env.PORT || 5000);