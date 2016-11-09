import React from 'react'
import css from './style.css'

const Stats = props => {
  return (
    <div className={css.root}>
      <ul className={css.ul}>
        {stats.map((x, i) =>
          <li key={i} className={css.li}>
            <div className={css.num}>{x.num}</div>
            <div className={css.caption}>{x.caption}</div>
          </li>
        )}
      </ul>
      <div className={css.highlight} />
    </div>
  )
}

const stats = [
  { num: 27, caption: 'New Applicants' },
  { num: 12, caption: 'Reviewed Applicants' },
  { num: 8,  caption: 'Interviewees' },
  { num: 5,  caption: 'Finalists' },
  { num: 2,  caption: 'Days Left' },
]

export default Stats