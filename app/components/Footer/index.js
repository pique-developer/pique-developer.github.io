import React from 'react'
import Link from 'react-router/Link'
import css from './style.css'

export const Footer = props => {
  return (
    <footer className={css.root}>
      <div className={css.main}>
        <div className={css.col}>
          <span className={css.header}>Company</span>
          <Link className={css.link} to="/about#team">Team</Link>
          <span className={css.link}>Blog</span>
          <span className={css.link}>Get Involved</span>
        </div>
        <div className={css.col}>
          <span className={css.header}>Educators</span>
          <Link className={css.link} to="/educators">Get Started</Link>
          <Link className={css.link} to="/educators">Learn More</Link>
        </div>
        <div className={css.col}>
          <span className={css.header}>Scholarship Foundations</span>
          <Link className={css.link} to="/about">About</Link>
          <Link className={css.link} to="/faq">FAQ</Link>
          <span className={css.link}>Become a Partner</span>
        </div>
        <div className={css.col}>
          <span className={css.header}>Support</span>
          <Link className={css.link} to="/faq">FAQ</Link>
        </div>
      </div>
      <div className={css.subfooter}>
        <div className="pull-left">
          <a href="" className="social-media"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
          <a href="" className="social-media"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="" className="social-media"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
        <div className={css.copyright}>Pique © 2016</div>
      </div>
    </footer>
  )
}

export default Footer