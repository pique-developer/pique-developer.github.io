import React from 'react'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'

const MatchWhenReturning = ({ component:Component, isNew, ...rest }) => {
  return (
    <Match
      {...rest}
      render={props => isNew === false
        ? <Component {...props} />
        : <Redirect
            to={{pathname: '/student-questionnaire',
            state: {from: props.location}}} />} />
  )
}

export default MatchWhenReturning