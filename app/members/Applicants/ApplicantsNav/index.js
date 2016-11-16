import React from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import css from './style.css'

const ApplicantsNav = props => {
  return (
    <div className={css.root}>
      <ul className={css.ul}>
        {props.routes.map((x, i) =>
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

export default connect(
  state => {
    const { applicants } = state.app
    return {
      new: applicants.new.length,
      reviewed: applicants.reviewed.length,
      interviewees: applicants.interviewees.length,
      finalists: applicants.finalists.length,
    }
  }
)(ApplicantsNav)