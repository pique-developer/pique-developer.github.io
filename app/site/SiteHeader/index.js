import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import * as Actions from 'api/actions'
import logo from './001-logo.png'
import css from './style.css'

export const SiteHeader = ({  fill, fixed, launchModal }) => {
  return (
    <div className={`${css.root} ${fill ? css.fill : ''} ${fixed ? css.fixed : ''}`}>
      <div className={css.brand}>
        <Link to="/"><img className={css.img} src={logo} /></Link>
      </div>
      <div className={css.links}>
        <div className={css.nav}>
          <Link
            className={css.link}
            activeClassName={css.active}
            to="/about">About Us <div className={css.selected}/> </Link>
          <Link
            className={css.link}
            activeClassName={css.active}
            to="/educators">Educators <div className={css.selected}/> </Link>
          <Link
            className={css.link}
            activeClassName={css.active}
            to="/providers">Scholarship Providers <div className={css.selected}/> </Link>
          <Link
            className={css.link}
            activeClassName={css.active}
            to="/students">Students <div className={css.selected}/> </Link>
        </div>
         <div className={css.btn} onClick={launchModal}>Sign Up</div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    fixed: state.ui.fixed,
    fill: state.ui.fill || state.routing.route === '/faq',
  }),
  Actions
)(SiteHeader)