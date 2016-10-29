import React from 'react'
import Form from 'components/Form'
import css from './style.css'

export const StudentsForm = props => {
  return (
    <div className={css.root}>
      <div className={css.header}>
        <div className={css.line}>Save Time. Submit More Applications.</div>
        <div className={css.line}>Increase Your Chances of Winning Scholarships.</div>
      </div>
      <div className={css.copy}>Between lesson plans, reviewing last night's homework assignments, running an extra-curricular activity, and writing college recommendations there is simply not enough time to write a recommendation to each scholarship your students apply to. We get it.</div>
      <div className={css.form}>
        <Form />
      </div>
    </div>
  )
}

export default StudentsForm
