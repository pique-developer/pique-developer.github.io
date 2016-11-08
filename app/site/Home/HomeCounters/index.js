import React from 'react'
import { connect } from 'react-redux'
import Stats from './Stats'
import Waves from './waves'
import css from './style.css'

export const HomeCounters = props => {
  return (
    <div className={css.root}>
      <Waves animate={props.animate} />
      <Stats animate={props.animate} />
    </div>
  )
}

export default connect(
  state => ({
    animate: state.ui.animate3
  })
)(HomeCounters)
