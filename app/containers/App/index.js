import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Modal from 'components/Modal'
import Home from 'containers/Home'
import ScholarshipProviders from 'containers/ScholarshipProviders'
import FAQ from 'containers/FAQ'
import { launchModal } from 'api/actions'
import css from './style.css'

export class App extends Component {
  render() {
    return (
      <div className={`${css.root} ${this.props.open ? css.open : ''}`}>
        <Match
          pattern="/*"
          component={Header}
          onClick={this.props.launchModal} />
        <Match
          exactly
          pattern="/"
          component={Home} />
        <Match
         pattern="/providers"
         component={ScholarshipProviders} />
        <Match
         pattern="/faq"
         component={FAQ} />
        <Footer />
        <Modal />
      </div>
    )
  }
}

export default connect(
  state => ({
    open: state.open
  }),
  { launchModal }
)(App)