import React from 'react'
import Counter from 'containers/Home/Counter'
import css from './style.css'

export const DebtCounter = props => {
  return (
    <div className={css.root}>
      <h3 className={css.title}>Rising Tuition. Rising Debt.</h3>
      <h2 className={css.price}>
        $<Counter
          total={37172}
          increment={102}
          interval={10}
          transform={x => x.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')} />
      </h2>
      <h6 className={css.label} />
    </div>
  )
}

export default DebtCounter