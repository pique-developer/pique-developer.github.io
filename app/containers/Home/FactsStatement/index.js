import React from 'react'
import css from './style.css'

export const FactsStatement = props => {
  return (
    <div className={css.root}>
      <div className={css.header}>The Process is Broken</div>
      {facts.map((x, i) => <div className={i > 0 ? css.text : css.bold}>{x}</div>)}
    </div>
  )
}

const facts = [
  `Everyone loses in the current scholarship application process.`,
  `Students spend countless hours looking and applying to scholarships.`,
  `Counselors and teachers spend hours writing new recommendations for each scholarship.`,
  `Parents spend too much money to send SAT and ACT test scores.`
]

export default FactsStatement
