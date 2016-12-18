import React from 'react'
import Match from 'react-router/Match'
import AppSidebar from 'containers/Protected/AppSidebar'

const MatchWithSidebar = ({ routes, className }) => {
  return (
    <div>
      {routes.map(({ component:Component, pattern }) =>
        <Match
          key={pattern}
          pattern={pattern}
          render={props =>
            <div>
              <div className={className}>
                <Component {...props} />
              </div>
              <AppSidebar {...props} />
            </div>
        } />
      )}
    </div>
  )
}

export default MatchWithSidebar