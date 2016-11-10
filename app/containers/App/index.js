import React, { Component } from 'react'
import { connect } from 'react-redux'
import SiteRoutes from 'containers/SiteRoutes'
import MembersRoutes from 'containers/MembersRoutes'
import LoadingIndicator from 'components/LoadingIndicator'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.updateRouteState = ::this.updateRouteState
  }

  componentWillMount() {
    const { authenticating, loginSuccess, loginError } = this.props
    authenticating()
  }

  componentDidMount() {
    const { loginSuccess, loginError } = this.props
    API.initApp(
      user => setTimeout(_ => loginSuccess({ user }), 1000),
      e    => loginError({error: e.message})
    )
    this.updateRouteState(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.updateRouteState(nextProps)
    }
  }

  updateRouteState(props) {
    const { pathname, location } = props
    this.props.locationChange({ route: pathname, hash: location.hash })
  }

  render() {
    const { user, loading } = this.props
    return (
      <div className={`${css.root} ${this.props.open ? css.open : ''}`}>
        {loading ? <LoadingIndicator /> : null}
        <div className={`${css.router} ${!loading ? css.ready : ''}`}>
          {user ? <MembersRoutes /> : <SiteRoutes />}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    open: state.open,
    route: state.route,
    user: state.auth.user,
    loading: state.loading
  }),
  Actions
)(App)