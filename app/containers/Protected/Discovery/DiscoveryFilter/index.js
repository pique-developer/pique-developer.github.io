import React, { Component } from 'react'
import { connect } from 'react-redux'
import css from './style.css'

export class DiscoveryFilter extends Component {
  render() {
    return (
      <div className={css.root}>
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state
  })
)(DiscoveryFilter)
