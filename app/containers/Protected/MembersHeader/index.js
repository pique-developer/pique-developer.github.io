import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import LogoIcon from 'components/Icons/Logo'
import * as Actions from 'api/actions'
import css from './style.css'

export class MembersHeader extends Component {
  constructor(props) {
    super(props)
    this.signOut = :: this.signOut
    this.closeDropdown = ::this.closeDropdown
  }

  closeDropdown() {
    const { open, removeModal } = this.props
    if (open) {
      removeModal()
    }
  }

  signOut() {
    this.closeDropdown()
    this.props.signOut()
  }

  render() {
    const { user, open, launchModal } = this.props
    return (
      <div
        className={css.root}
        onClick={this.closeDropdown}>
        <div className={css.wrap}>

          <div className={css.brand}>
            <Link className={css.link} to="/">
              <LogoIcon className={css.logo}/>
            </Link>
          </div>

          <div className={css.border} />

          <div className={css.nav}>
            <div className={css.settings}>
              <ul className={css.ul}>
                <li className={css.li} >
                  <img
                    className={css.avatar}
                    src={user.photoURL}
                    onClick={launchModal} />

                  <div className={`${css.dropdown} ${open ? css.open : ''}`}>
                    <div className={css.point} />
                    <div className={css.nub} />
                    <ul className={css.tooltip}>
                      <li onClick={this.closeDropdown}>Profile</li>
                      <li onClick={this.closeDropdown}>Settings</li>
                      <li onClick={this.closeDropdown}>Scholarship</li>
                      <li onClick={this.signOut}>Log Out</li>
                    </ul>
                  </div>

                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    open: state.open,
  }),
 Actions
)(MembersHeader)