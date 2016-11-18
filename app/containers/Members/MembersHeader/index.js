import React from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import Button from 'components/Button'
import Gear from 'components/Gear'
import Caret from 'components/Caret'
import img from './100-logo.png'
import * as Actions from 'api/actions'
import css from './style.css'

export const MembersHeader = ({ className, signOut }) => {
  return (
    <div className={css.root}>
      <div className={css.wrap}>

        <div className={css.brand}>
          <div className={css.logo}>
            <Link className={css.link} to="/">
              <img src={img} />
            </Link>
          </div>
        </div>

        <div className={css.border} />

        <div className={css.nav}>
          <div className={css.settings}>
            <ul className={css.ul}>
              <li className={css.li} onClick={signOut}>
                <Gear />
              </li>
              <li className={css.li}>
                <Caret />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default connect(null, Actions)(MembersHeader)