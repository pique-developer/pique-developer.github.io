import React from 'react'
import Link from 'react-router/Link'
import css from './style.css'

const DashboardPanel = props => {
  return (
    <div className={css.root}>
      <ul className={css.ul}>
        {items.map((x, i) =>
          <li key={i} className={css.li}>
            <Link
              className={css.link}
              activeClassName={css.active}
              to={x.route}>
              <div className={css.copy}>
                <div className={css.num}>{x.num}</div>
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
  { route: '/',             num: 0, caption: 'New Applicants' },
  { route: '/reviewed',     num: 0, caption: 'Reviewed Applicants' },
  { route: '/interviewees', num: 0, caption: 'Interviewees' },
  { route: '/finalists',    num: 0, caption: 'Finalists' },
  { route: '/days-left',    num: 0, caption: 'Days Left' },
]

export default DashboardPanel