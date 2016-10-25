import React from 'react'
import css from './style.css'

export const Footer = props => {
  return (
    <footer className={css.root}>
      <div className={css.main}>
        <div className={css.col}>
          <a className={css.header}>Company</a>
          <a className={css.link} href="about.html#team">Team</a>
          <a className={css.link} href="blog.html">Blog</a>
          <a className={css.link}>Get Involved</a>
        </div>
        <div className={css.col}>
          <a className={css.header}>Educators</a>
          <a className={css.link} href="educator.html">Get Started</a>
          <a className={css.link} href="educator.html">Learn More</a>
        </div>
        <div className={css.col}>
          <a className={css.header}>Scholarship Foundations</a>
          <a className={css.link} href="about.html">About</a>
          <a className={css.link}>FAQ</a>
          <a className={css.link}>Become a Partner</a>
        </div>
        <div className={css.col}>
          <a className={css.header}>Support</a>
          <a className={css.link}>FAQ</a>
        </div>
      </div>
      <div className={css.subfooter}>
        <div className="pull-left">
          <a href="" className="social-media"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
          <a href="" className="social-media"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="" className="social-media"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
        <div className={css.copyright}>Copyright 2016 Pique</div>
      </div>
    </footer>
  )
}

export default Footer