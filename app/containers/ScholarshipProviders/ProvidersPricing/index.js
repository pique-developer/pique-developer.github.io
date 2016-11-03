import React from 'react'
import Card from 'components/Card'
import css from './style.css'

export const ProvidersPricing = props => {
  return (
    <div className={css.root}>
      <h3 className={css.header}>Simple Pricing. Comprehensive Solution.</h3>
      <Card
        price={price}
        annotation={annotation}
        btnText={btnText}
        list={list} />
    </div>
  )
}

const price = `$99.99 /year`
const annotation = `*Billed Annually`
const btnText = `Get Pique!`
const list = [
  'Find Qualified Applicants',
  'Create a Scholarship Review Team',
  'Review Applications In-App',
  'Score Applicants',
  'Notify Interviewees, Finalists, and Winners In-App'
]

export default ProvidersPricing
