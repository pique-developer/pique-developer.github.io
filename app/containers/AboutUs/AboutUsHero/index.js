import React from 'react'
import hero from './101-hero.jpg'
import mask from './c-mask.png'
import css from './style.css'

export const AboutUsHero = props => {
  return (
    <div className={css.hero} style={{
      backgroundImage: `url(${hero}`,
      WebkitMaskImage: `url(${mask}`,
    }}>
      <div className={css.fade} />
      <h1 className={css.h1} />
      <button className={css.btn} onClick={props.onClick}>Sign Up for Free!</button>
    </div>
  )
}

export default AboutUsHero
