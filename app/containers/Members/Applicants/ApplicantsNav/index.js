import React from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import css from './style.css'

const ApplicantsNav = ({ links }) => {
  return (
    <div className={css.root}>
      <ul className={css.ul}>
        {links.map((x, i) =>
          <li key={i} className={css.li}>
            <Link
              className={css.link}
              to={x.to}
              activeClassName={css.active}
              activeOnlyWhenExact>
              <div className={css.copy}>
                <div className={css.num}>{x.count}</div>
                <div className={css.caption}>{x.text}</div>
              </div>
              <div className={css.selected} />
            </Link>
          </li>
        )}
        <li className={css.li}>
          <div className={css.copy}>
            <div className={css.num}>0</div>
            <div className={css.caption}>Days Left</div>
          </div>
          <div className={css.selected} />
        </li>
      </ul>
    </div>
  )
}

const selectApplicants = applicants => {
  return [
    {to: '/dashboard/new', key: 'new', text: 'New Applicants'},
    {to: '/dashboard/reviewed', key: 'reviewed', text: 'Reviewed Applicants'},
    {to: '/dashboard/interviewees', key: 'interviewees', text: 'Interviewees'},
    {to: '/dashboard/finalists', key: 'finalists', text: 'Finalists'},
  ].map(x => ({...x, count: applicants[x.key].length}))
}

export default connect(
  state => {
    const { applicants } = state.app
    return {
      links: selectApplicants(applicants)
    }
  }
)(ApplicantsNav)