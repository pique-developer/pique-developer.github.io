import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'components/Modal'
import * as Actions from 'api/actions'
import css from './style.css'

export class MembersModal extends Component {
  constructor(props) {
    super(props)
    this.onChange = ::this.onChange
  }

  state = {share: false}

  onChange(e) {
    const { value } = e.target
    this.setState({share: !!value.length})
  }

  render() {
    const { share } = this.state
    const { removeModal, open } = this.props
    return (
      <Modal
        open={open}
        onClick={removeModal}
        className={css.curtain}>
        <div className={css.modal}>
          <div className={css.title}>Invite members</div>
          <div className={css.label}>People</div>

          <input
            onChange={this.onChange}
            className={css.input}
            placeholder="Enter email addresses..."
            type="text" />

          <div className={`${!share ? css.hide : ''}`}>
            <input
              className={css.extra}
              placeholder="blah, blah, blah"
              type="text" />
          </div>

          <div className={css.done}>
            <button className={css.btn}>Done</button>
          </div>
        </div>
      </Modal>
    )
  }
}

export default connect(
  state => ({
    open: state.open,
  }),
  Actions
)(MembersModal)
