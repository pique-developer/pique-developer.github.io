import React from 'react'
import { connect } from 'react-redux'
import Modal from 'components/Modal'
import * as Actions from 'api/actions'
import css from './style.css'

export const MembersModal = ({ open, removeModal }) => {
  return (
    <Modal
      open={open}
      onClick={removeModal}>
      <div className={css.modal}>
        <div className={css.title}>Invite members</div>

        <div className={css.label}>People</div>
        <input
          className={css.input}
          placeholder="Enter email addresses..."
          type="text" />
        <div className={css.done}>
          <button className={css.btn}>Done</button>
        </div>
      </div>
    </Modal>
  )
}

export default connect(
  state => ({
    open: state.open,
  }),
  Actions
)(MembersModal)
