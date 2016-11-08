import React from 'react'
import { connect } from 'react-redux'
import hero from './101-hero.jpg'
import mask from './c-mask.png'
import css from './style.css'

export const AboutHero = ({ opacityInc, opacityDec, onClick }) => {
  return (
    <div className={css.hero} style={{
      backgroundImage: `url(${hero}`,
      WebkitMaskImage: `url(${mask}`,
    }}>
      <div style={{opacity: opacityInc}} className={css.overlay} />
      <h1 style={{opacity: opacityDec}} className={css.h1} />
      <button style={{opacity: opacityDec}} className={css.btn} onClick={onClick}>Sign Up for Free!</button>
    </div>
  )
}

export default connect(
  state => ({
    opacityInc: state.ui.opacityInc,
    opacityDec: state.ui.opacityDec,
  })
)(AboutHero)
