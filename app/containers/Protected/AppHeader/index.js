import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import HeaderMenu from './HeaderMenu'
import LogoIcon from 'components/Icons/Logo'
import Modal from 'components/Modal'
import * as Actions from 'api/actions'
import css from './style.css'

export class AppHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
    this.signOut = :: this.signOut
    this.toggleDropdown = ::this.toggleDropdown
  }

  toggleDropdown() {
    this.setState({open: !this.state.open})
  }

  signOut() {
    if (this.state.open) {
      this.toggleDropdown()
    }
    this.props.signOut()
  }

  render() {
    const { open } = this.state
    const { user } = this.props

    return (
      <div className={css.root}>
        <div className={`${css.modal} ${open ? css.open : ''}`}>
          <div className={css.curtain} onClick={this.toggleDropdown} />
        </div>

        <div className={css.wrap}>
          <div className={css.brand}>
            <Link className={css.link} to="/dashboard/new">
              <LogoIcon className={css.logo}/>
            </Link>
          </div>

          <div className={css.border} />

          <div className={css.nav}>
            <div
              onClick={this.toggleDropdown}
              className={css.settings}>
              <ul className={css.ul}>
                <li className={css.li} >
                  <img
                    className={css.avatar}
                    src={user.photoURL}
                    onClick={this.toggleDropdown} />

                  <HeaderMenu
                    open={open}
                    onClick={this.toggleDropdown}
                    signOut={this.signOut} />
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
    user: state.auth.user,
  }),
 Actions
)(AppHeader)