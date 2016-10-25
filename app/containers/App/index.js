import React, { Component } from 'react'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'
import Home from 'containers/Home'

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Match pattern="/" component={Home} />
        </Router>
      </div>
    )
  }
}

export default App