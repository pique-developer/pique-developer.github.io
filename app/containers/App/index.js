import React, { Component } from 'react'
import { connect } from 'react-redux'
import SiteRoutes from 'containers/SiteRoutes'
import MembersRoutes from 'containers/MembersRoutes'
import * as Actions from 'api/actions'
import css from './style.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.updateRouteState = ::this.updateRouteState
  }

  componentDidMount() {
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
    const { user } = this.props
    return (
      <div className={`${css.root} ${this.props.open ? css.open : ''}`}>
        {user ? <MembersRoutes /> : <SiteRoutes />}
      </div>
    )
  }
}

export default connect(
  state => ({
    open: state.open,
    route: state.route,
    user: state.auth.user,
  }),
  Actions
)(App)