import 'babel-polyfill';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const publicPath = '/'
const outputPath = path.resolve(__dirname, '..', '..', 'build')

app.use(publicPath, express.static(outputPath))
app.use(bodyParser.json())

const stripeEndpoint = require('./api/stripeEndpoint')
app.use('/api/stripe', stripeEndpoint)

const usersEndpoint = require('./api/users')
app.use('/api/users', usersEndpoint)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(outputPath, 'index.html'))
})

app.listen(process.env.PORT || 5000)