import React from 'react'
import Link from 'react-router/Link'
import Logo from 'components/Logo'
import Button from 'components/Button'
import css from './style.css'

export const FAQHeader = props => {
  return (
    <div className={css.root}>
      <div className={css.navbar}>
        <Link to="/" className={css.logo}>
          <Logo />
        </Link>

        <div className={css.nav}>
          <Link className={css.link} to="/">About Us</Link>
          <Link className={css.link} to="/">About Us</Link>
          <Button className={css.btn}>Sign In</Button>
        </div>
      </div>
    </div>
  )
}

export default FAQHeader