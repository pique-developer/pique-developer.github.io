import React from 'react'
import Link from 'react-router/Link'
import css from './style.css'

export const ScholarshipPostBtns = ({ back, next, submit, onClick }) => {
  return (
    <div className={css.root}>
      {back
        ? <Link
          to={back}
          className={css.back}>Back</Link>
        : null}
      {next
        ? <Link
            to={next}
            className={css.next}>Next</Link>
        : null}
      {submit
        ? <Link
            to={submit}
            onClick={onClick}
            className={css.next}>Post Scholarship</Link>
        : null}
    </div>
  )
}

export default ScholarshipPostBtns
