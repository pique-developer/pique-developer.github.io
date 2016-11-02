import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Modal from 'components/Modal'
import Home from 'containers/Home'
import AboutUs from 'containers/AboutUs'
import Educators from 'containers/Educators'
import ScholarshipProviders from 'containers/ScholarshipProviders'
import Students from 'containers/Students'
import FAQ from 'containers/FAQ'
import Scroll from 'components/Scroll'
import * as Actions from 'api/actions'
import css from './style.css'

export class App extends Component {

  componentWillMount() {
    this.props.locationChange(this.props.pathname)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.props.locationChange(nextProps.pathname)
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <div className={`${css.root} ${this.props.open ? css.open : ''}`}>
        <Scroll />
        <Modal />
        <Match pattern="/*" component={Header} onClick={this.props.launchModal} />
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/about" component={AboutUs} />
        <Match pattern="/educators" component={Educators} />
        <Match pattern="/providers" component={ScholarshipProviders} />
        <Match pattern="/students" component={Students} />
        <Match pattern="/faq" component={FAQ} />
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