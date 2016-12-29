import 'babel-polyfill';
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/build', express.static('build'))

const stripeEndpoint = require('./api/stripeEndpoint')
app.use('/api/stripe', stripeEndpoint)

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../../build')})
})

app.listen(process.env.PORT || 5000)