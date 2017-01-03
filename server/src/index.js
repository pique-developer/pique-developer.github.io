import 'babel-polyfill';
const path = require('path');
const fs = require('fs')
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
// app.use('/build', express.static('build'))

const stripeEndpoint = require('./api/stripeEndpoint')
app.use('/api/stripe', stripeEndpoint)

app.get('*', (req, res) => {
  const filepath = path.join(__dirname, '..', '..', 'build', 'index.html')
  res.sendFile(fs.readFileSync(filepath).toString())
})

app.listen(process.env.PORT || 5000)