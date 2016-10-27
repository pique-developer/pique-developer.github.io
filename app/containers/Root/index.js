import React from 'react'
import { Provider } from 'react-redux'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'
import App from 'containers/App'
import configureStore from 'api/store'

const Root = store => {
  return _ => (
    <Provider store={store}>
      <Router>
        <Match pattern="*" component={App} />
      </Router>
    </Provider>
  )
}

export default Root(configureStore())