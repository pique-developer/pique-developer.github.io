import React from 'react'
import Match from 'react-router/Match'

const MatchWithSidebar = ({ routes, className, sidebar:Sidebar }) => {
  return (
    <div>
      {routes.map(({ component:Component, pattern }) =>
        <Match
          key={pattern}
          pattern={pattern}
          render={props =>
            <div>
              <Component {...props} />
              <Sidebar {...props} />
            </div>
        } />
      )}
    </div>
  )
}

export default MatchWithSidebar