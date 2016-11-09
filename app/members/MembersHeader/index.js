import React from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import Button from 'components/Button'
import Logo from 'components/Logo'
import Gear from 'components/Gear'
import Caret from 'components/Caret'
import * as Actions from 'api/actions'
import css from './style.css'

export const MembersHeader = ({ className, signOut }) => {
  return (
    <div className={`${css.root} ${className ? className : ''}`}>
      <Link className={css.logo} to="/">
        <Logo />
      </Link>
      <Button className={css.btn}>View Your Scholarship Page</Button>
      <Button className={css.btn}>How It Works</Button>
      <div className={css.settings} onClick={signOut}>
        <Gear />
        <Caret />
      </div>
    </div>
  )
}

export default connect(null, Actions)(MembersHeader)