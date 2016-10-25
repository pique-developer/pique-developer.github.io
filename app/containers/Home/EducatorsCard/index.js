import React from 'react'
import notepad from './005-notepad.png'
import css from './style.css'

export const EducatorsCard = props => {
  return (
    <div className={css.root}>
      <div className={css.card}>
        <div className={css.title} />
        <div className={css.divider} />
        <img className={css.img} src={notepad} />
        <div className={css.caption}>One Recommendation For Each Student.</div>
        <div className={css.caption}>Done.</div>
        <div className={css.body}>
          <div className={css.copy}>Upload one standard recommendation onto Pique for each student and never</div>
          <div className={css.copy}>write another recommendation for that student again. And do not worry, your</div>
          <div className={css.copy}>students will never be penalized by foundations standard recommendation.</div>
        </div>
        <div className={css.copy}>That's the Pique way.</div>
        <div className={css.btns}>
          <div className={css.btn}>Sign Up!</div>
          <div className={css.btn}>Learn More</div>
        </div>
      </div>
    </div>
  )
}

export default EducatorsCard