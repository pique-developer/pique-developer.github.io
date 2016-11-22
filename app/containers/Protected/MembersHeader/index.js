import React from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import Button from 'components/Button'
import LogoIcon from 'components/Icons/Logo'
import * as Actions from 'api/actions'
import css from './style.css'

export const MembersHeader = ({ className, user, signOut }) => {
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
              <li className={css.li} onClick={signOut}>
                <img className={css.avatar} src={user.photoURL} />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default connect(null, Actions)(MembersHeader)