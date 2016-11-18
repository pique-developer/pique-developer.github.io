import React, { Component } from 'react'
import { connect } from 'react-redux'
import Site from 'containers/Site'
import Members from 'containers/Members'
import LoadingIndicator from 'components/LoadingIndicator'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.initAuth = ::this.initAuth
    this.updateRouteState = ::this.updateRouteState
  }

  componentWillMount() {
    this.initAuth()
  }

  componentDidMount() {
    this.updateRouteState(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.updateRouteState(nextProps)
    }
  }

  initAuth() {
    const { initAuthState, loginError } = this.props
    API.initApp(
      user => initAuthState({ user }),
      e    => loginError({error: e.message})
    )
  }

  updateRouteState(props) {
    const { pathname, location, locationChange } = props
    locationChange({ route: pathname, hash: location.hash })
  }

  render() {
    const { user, initialized, loading, open } = this.props
    return (
      <div className={`${css.root} ${open ? css.open : ''}`}>
        {loading ? <LoadingIndicator /> : null}
        {initialized
          ? <div className={`${css.router} ${!loading ? css.ready : ''}`}>
              {user ? <Members /> : <Site />}
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