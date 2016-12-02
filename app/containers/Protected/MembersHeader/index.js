import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import LogoIcon from 'components/Icons/Logo'
import Modal from 'components/Modal'
import * as Actions from 'api/actions'
import css from './style.css'

export class MembersHeader extends Component {
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
      <div>
        <Modal open={open} onClick={this.toggleDropdown} />

        <div className={css.root} onClick={this.toggleDropdown}>
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
                      onClick={this.toggleDropdown} />

                    <div className={`${css.dropdown} ${open ? css.open : ''}`}>
                      <div className={css.point} />
                      <div className={css.nub} />
                      <ul className={css.tooltip}>
                        <li
                          onClick={this.toggleDropdown}
                          className={css.li}>Profile</li>
                        <li
                          onClick={this.toggleDropdown}
                          className={css.li}>
                          <Link
                            to='/settings'
                            className={css.route}>Settings</Link>
                          </li>
                        <li
                          onClick={this.toggleDropdown}
                          className={css.li}>Preview Scholarship</li>
                        <li
                          onClick={this.signOut}
                          className={css.li}>Log Out</li>
                      </ul>
                    </div>

                  </li>
                </ul>
              </div>
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
)(MembersHeader)