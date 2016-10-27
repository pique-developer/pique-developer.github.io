import React from 'react'
import FAQHeader from './FAQHeader'
import FAQCards from './FAQCards'
import FAQButtons from './FAQButtons'
import css from './style.css'

export const FAQ = props => {
  return (
    <div className={css.root}>
      <FAQHeader />

      <div className={css.content}>

        <div className={css.header}>
          <div className={css.title} />
          <div className={css.divider} />
        </div>

        <FAQButtons />
        <FAQCards />

      </div>
    </div>
  )
}


export default FAQ