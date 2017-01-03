import 'babel-polyfill';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const stripeEndpoint = require('./api/stripeEndpoint')

const app = express();

const publicPath = '/'
const outputPath = path.resolve(__dirname, '..', '..', 'build')

app.use(publicPath, express.static(outputPath))
app.use(bodyParser.json())
app.use('/api/stripe', stripeEndpoint)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(outputPath, 'index.html'))
})

app.listen(process.env.PORT || 5000)