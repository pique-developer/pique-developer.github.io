import React from 'react'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import Dashboard from '../Dashboard'
import Applicant from '../Applicant'
import Committee from '../Committee'
import Settings from '../Settings'
import AppSidebar from '../AppSidebar'
import css from './style.css'

const AppRoutes = props => {
  return (
    <div>
      <Match pattern='/applicant/:id' component={Applicant} />
      {routesWithSidebar.map(x =>
        <MatchWithSidebar key={x.pattern} {...x} />
      )}
    </div>
  )
}

const MatchWithSidebar = ({ component:Component, pattern }) => {
  return (
    <Match pattern={pattern} render={props =>
      <div>
        <div className={css.main}>
          <Component {...props} />
        </div>
        <AppSidebar {...props} />
      </div>
    } />
  )
}

const routesWithSidebar = [
  {pattern: '/dashboard', component: Dashboard},
  {pattern: '/settings', component: Settings},
  {pattern: '/committee', component: Committee},
]
export default AppRoutes