import React from 'react'
import Link from 'react-router/Link'
import logo from './001-logo.png'
import css from './style.css'

export const Header = props => {
  return (
    <div className={css.root} style={props.style}>
      <div className={css.brand}>
        <Link to="/"><img className={css.img} src={logo} /></Link>
      </div>
      <div className={css.links}>
        <div className={css.nav}>
          <Link
            className={css.link}
            activeClassName={css.selected}
            to="/about">About Us</Link>
          <Link
            className={css.link}
            activeClassName={css.selected}
            to="/educators">Educators</Link>
          <Link
            className={css.link}
            activeClassName={css.selected}
            to="/providers">Scholarship Providers</Link>
          <Link
            className={css.link}
            activeClassName={css.selected}
            to="/students">Students</Link>
        </div>
         <div className={css.btn}>Sign Up</div>
      </div>
    </div>
  )
}

export default Header