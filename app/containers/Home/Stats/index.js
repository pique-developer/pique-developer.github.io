import React from 'react'
import Counter from 'containers/Home/Counter'
import css from './style.css'

export const Stats = props => {
  return (
    <div className={css.root}>
      <div className={css.item}>
        <div className={css.tuition}>
          <Counter
            total={45}
            increment={1}
            interval={30} />%</div>
        <h6 className={css.caption}>Increase in College Tuition this Decade</h6>
      </div>
      <div className={css.item}>
        <div className={css.loan}>
          <Counter
            total={74}
            increment={1}
            interval={30} />%</div>
        <h6 className={css.caption}>Increase in Student Loan Size</h6>
      </div>
      <div className={css.item}>
        <div className={css.graduating}>
          <Counter
            total={70}
            increment={1}
            interval={30} />%</div>
        <h6 className={css.caption}>Students Graduating in 2016 Took Out a Student Loan</h6>
      </div>
    </div>
  )
}

export default Stats