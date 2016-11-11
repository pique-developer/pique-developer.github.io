import React from 'react'
import Match from 'react-router/Match'
import DashboardPanel from './DashboardPanel'
import NewApplicants from './NewApplicants'
import css from './style.css'

const Applicants = props => {
  return (
    <div className={css.root}>
      <div className={css.wrap}>
        <DashboardPanel />
        <Match pattern="/" component={NewApplicants} exactly />
      </div>
    </div>
  )
}

export default Applicants