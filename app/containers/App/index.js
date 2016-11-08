import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Modal from 'components/Modal'
import Home from 'containers/Home'
import AboutUs from 'containers/AboutUs'
import Educators from 'containers/Educators'
import Providers from 'containers/Providers'
import Students from 'containers/Students'
import Nonprofits from 'containers/Nonprofits'
import FAQ from 'containers/FAQ'
import Scroll from 'components/Scroll'
import Payment from 'containers/Payment'
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
    return (
      <div className={`${css.root} ${this.props.open ? css.open : ''}`}>
        <Scroll />
        <Modal />
        <Header />
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/about" component={AboutUs} />
        <Match pattern="/educators" component={Educators} />
        <Match pattern="/providers" component={Providers} />
        <Match pattern="/students" component={Students} />
        <Match pattern="/faq" component={FAQ} />
        <Match pattern="/nonprofits" component={Nonprofits} />
        <Match pattern="/payment" component={Payment} />
        <Footer />
      </div>
    )
  }
}

export default connect(
  state => ({
    open: state.open,
    route: state.route,
  }),
  Actions
)(App)