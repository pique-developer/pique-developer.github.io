import React from 'react'
import check from './305-check.png'
import css from './style.css'

export const ProvidersPricing = props => {
  return (
    <div className={css.root}>
      <h3 className={css.header}>Simple Pricing. Comprehensive Solution.</h3>
      <div className={css.card}>
        <div className={css.content}>
          <div className={css.title}>Pique</div>
          <div className={css.annual}>$99.99 <span>/year</span></div>
          <div className={css.anno}>*Billed Annually</div>
          <div className={css.divider}></div>

          <div className={css.ul}>
            {priceList.map((x, i) =>
              <div key={i} className={css.item}>
                <img className={css.img} src={check} />
                <div className={css.text}>{x}</div>
              </div>
            )}
          </div>

        </div>
        <div className={css.btn}>Get Pique!</div>
      </div>
    </div>
  )
}

const priceList = [
  'Find Qualified Applicants',
  'Create a Scholarship Review Team',
  'Review Applications In-App',
  'Score Applicants',
  'Notify Interviewees, Finalists, and Winners In-App'
]

export default ProvidersPricing
