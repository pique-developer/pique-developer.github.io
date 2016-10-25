import express from 'express'
import path from 'path'
import pkg from './package.json'
import webpack from 'webpack'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config.js'

const compiler = webpack(webpackConfig)
const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  silent: true,
  publicPath: '/',
  stats: 'errors-only',
})

const app = express()

app.use(webpackHotMiddleware(compiler))
app.use(middleware)

const fs = middleware.fileSystem

app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404)
    } else {
      res.send(file.toString())
    }
  })
})

app.listen(3000, _ => console.log(`\n\nListening\n\n`))