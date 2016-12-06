import React from 'react'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'

const MatchWhenNew = ({ component:Component, isNew, ...rest }) => {
  return (
    <Match
      {...rest}
      render={props => isNew === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/dashboard/new'}} />} />
  )
}

export default MatchWhenNew