import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import LogoIcon from 'components/Icons/Logo'
import * as Actions from 'api/actions'
import css from './style.css'


export class MembersHeader extends Component {
  render() {
    const { user, signOut } = this.props
    return (
      <div className={css.root}>
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
                  <img className={css.avatar} src={user.photoURL} />

                  <div className={css.dropdown}>
                    <div className={css.point} />
                    <div className={css.nub} />
                    <ul className={css.tooltip}>
                      <li>Profile</li>
                      <li>Settings</li>
                      <li>Scholarship</li>
                      <li onClick={signOut}>Log Out</li>
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

export default connect(null, Actions)(MembersHeader)