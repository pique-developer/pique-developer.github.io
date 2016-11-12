import React from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import css from './style.css'

const ApplicantsNav = props => {
  return (
    <div className={css.root}>
      <ul className={css.ul}>
        {items.map((x, i) =>
          <li key={i} className={css.li}>
            <Link
              className={css.link}
              to={x.route}
              activeClassName={css.active}
              activeOnlyWhenExact>
              <div className={css.copy}>
                <div className={css.num}>{props[x.key]}</div>
                <div className={css.caption}>{x.caption}</div>
              </div>
              <div className={css.selected} />
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

const items = [
  {route: '/',             key: 'new',          caption: 'New Applicants', activeOnlyWhenExact: true},
  {route: '/reviewed',     key: 'reviewed',     caption: 'Reviewed Applicants'},
  {route: '/interviewees', key: 'interviewees', caption: 'Interviewees'},
  {route: '/finalists',    key: 'finalists',    caption: 'Finalists'},
  {route: '/days-left',    key: 'days',         caption: 'Days Left'},
]

export default connect(
  state => {
    const { applicants } = state.app
    return {
      new: applicants.new.length,
      reviewed: applicants.reviewed.length,
      interviewees: applicants.interviewees.length,
      finalists: applicants.finalists.length,
      days: 0,
    }
  }
)(ApplicantsNav)