import React from 'react'
import Banner from './Banner'
import Stats from './Stats'
import Profiles from './Profiles'
import css from './style.css'

const Applicants = props => {
  return (
    <div className={css.root}>
      <Banner />
      <Stats />
      <Profiles />
    </div>
  )
}

export default Applicants