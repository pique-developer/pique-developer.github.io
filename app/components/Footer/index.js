import React from 'react'
import Link from 'react-router/Link'
import css from './style.css'

export const Footer = props => {
  return (
    <footer className={css.root}>
      <div className={css.main}>
        {contents.map((x, i) =>
          <div key={i} className={css.col}>
            <span className={css.header}>{x.title}</span>
            {x.links.map((x, i) => x.to
              ? <Link key={i} className={css.link} to={x.to}>{x.text}</Link>
              : <a key={i} className={css.link} href={x.href}>{x.text}</a>
            )}
          </div>
        )}
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

const contents = [
  {
    title: 'Company',
    links: [
      { to: '/about#team', text: 'Team'},
      { to: '/blog', text: 'Blog'},
      { to: '/about', text: 'Mission'},
      { href: 'https://angel.co/pique/jobs', text: 'Careers'},
    ]
  },{
    title: 'Become a Partner',
    links: [
      { to: '/nonprofits', text: 'Nonprofits'},
      { to: '/providers', text: 'Scholarship Providers'},
      { to: '/educators', text: 'Educators'},
    ]
  },{
    title: 'Support',
    links: [
      { to: '/faq', text: 'FAQ'},
      { href: 'mailto:support@getpique.co', text: 'Contact Us'},
    ]
  }
]

export default Footer