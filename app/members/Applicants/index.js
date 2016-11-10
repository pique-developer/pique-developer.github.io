import React from 'react'
import Banner from './Banner'
import DashboardPanel from './DashboardPanel'
import Profiles from './Profiles'
import css from './style.css'

const Applicants = props => {
  return (
    <div className={css.root}>
      <div className={css.wrap}>
        <DashboardPanel />
      </div>
    </div>
  )
}

export default Applicants