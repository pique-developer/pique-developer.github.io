import React from 'react'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import Dashboard from '../Dashboard'
import Applicant from '../Applicant'
import Committee from '../Committee'
import Settings from '../Settings'
import MembersSidebar from '../MembersSidebar'
import css from './style.css'

const AppRoutes = props => {
  return (
    <div>
      <div className={css.main}>
        <Match pattern='/dashboard' component={Dashboard} />
        <Match pattern='/settings' component={Settings} />
        <Match pattern='/applicant' component={Applicant} />
        <Match pattern='/committee' component={Committee} />
      </div>
      <Match pattern='/' component={MembersSidebar} />
    </div>
  )
}

export default AppRoutes