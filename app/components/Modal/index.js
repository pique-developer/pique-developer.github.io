import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeModal } from 'api/actions'
import css from './style.css'

export class Modal extends Component {
  render() {
    const { open, removeModal } = this.props

    return open
      ? <div className={css.root}>
          {this.props.children}
          <div
            className={css.curtain}
            onClick={removeModal} />
        </div>
      : null
  }
}

export default connect(
  state => ({
    open: state.open,
  }),
  { removeModal }
)(Modal)
