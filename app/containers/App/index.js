import React, { Component } from 'react'
import { connect } from 'react-redux'
import Redirect from 'react-router/Redirect'
import Public from 'containers/Public'
import Protected from 'containers/Protected'
import LoadingIndicator from 'components/LoadingIndicator'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class App extends Component {

  updateRouteState = props => {
    const { pathname, location, locationChange } = props
    locationChange({ route: pathname, hash: location.hash })
  }

  componentWillMount() {
    const { initAuthState, loginError } = this.props
    // API.initApp({
    //   next: user => initAuthState({ user }),
    //   error: e   => loginError({error: e.message})
    // })
  }

  componentDidMount() {
    this.updateRouteState(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.updateRouteState(nextProps)
    }
  }

  render() {
    const { user, initialized, loading, open } = this.props
    return (
      <div className={`${css.root} ${open ? css.open : ''}`}>
        {loading ? <LoadingIndicator /> : null}
        {initialized
          ? <div className={`${css.router} ${!loading ? css.ready : ''}`}>
              {user ? <Protected /> : <Public />}
            </div>
          : null
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    open: state.open,
    route: state.route,
    user: state.auth.user,
    loading: state.loading,
    initialized: state.auth.initialized,
  }),
  Actions
)(App)