import React from 'react'
import dc from './006-dc.jpg'
import flag from './007-flag.png'
import css from './style.css'

export const DCBanner = props => {
  return (
    <div
      className={css.root}
      style={{backgroundImage: `url(${dc})`}}>
      <div className={css.title} />
      <img className={css.img} src={flag} />
      <div className={css.caption}>Pique is a project founded by DCPS Alumni to</div>
      <div className={css.caption}>help simplify the scholarship application process.</div>
      <div className={css.btn} />
    </div>
  )
}

export default DCBanner