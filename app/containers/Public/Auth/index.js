import React from 'react'
import { connect } from 'react-redux'
import SignIn from './SignIn'
import SignUp from './SignUp'
import css from './style.css'

export const Auth = ({ login }) => {
  return (
    <div className={css.root}>
      {login
        ? <SignIn />
        : <SignUp />
      }
    </div>
  )
}

export default connect(
  state => ({
    login: state.auth.login,
  })
)(Auth)
