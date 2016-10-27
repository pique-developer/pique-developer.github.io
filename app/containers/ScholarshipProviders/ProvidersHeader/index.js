import React from 'react'
import img from './201-tablet-screens.png'
import css from './style.css'

export const ProvidersHeader = props => {
  return (
    <div className={css.root}>
      <div className={css.hero}>
        <div className={css.checklist}>

          <div className={css.h1}>Manage the Entire Scholarship Application</div>
          <div className={css.h1}>Process in One Platform. For $99/yr.</div>

          <div className={css.h6}>
            <span className={css.subtitle}>One platform to help at every stage of the application process from</span>
            <span className={css.subtitle}>finding qualified students to reviewing applications</span>
          </div>

        </div>
        <div className={css.screens}>
          <img className={css.img} src={img} />
        </div>
      </div>
    </div>
  )
}


export default ProvidersHeader