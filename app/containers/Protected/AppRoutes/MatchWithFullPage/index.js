import React from 'react'
import Match from 'react-router/Match'

const MatchWithFullPage = ({ routes, className }) => {
  return (
    <div>
      {routes.map(({ component:Component, pattern }) =>
        <Match
          key={pattern}
          pattern={pattern}
          render={props =>
            <Component {...props} />
        } />
      )}
    </div>
  )
}

export default MatchWithFullPage