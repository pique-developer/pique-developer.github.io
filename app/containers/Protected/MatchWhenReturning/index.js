import React from 'react'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'

const MatchWhenReturning = ({ component:Component, isNew, pathname, ...rest }) => {
  return (
    <Match
      {...rest}
      render={props => isNew === false
        ? <Component {...props} />
        : <Redirect to={{ pathname, state: {from: props.location}}} />} />
  )
}

export default MatchWhenReturning