import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingIndicator from 'components/LoadingIndicator'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      login: true,
    }
    this.handleInputChanges = ::this.handleInputChanges
    this.handleKeyPress = ::this.handleKeyPress
    this.handleSubmit = ::this.handleSubmit
    this.switchType = ::this.switchType
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.handleSubmit(e)
    }
  }

  handleInputChanges(e) {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.state
    const { authenticating, loginSuccess, loginError } = this.props
    authenticating()
    API.signIn(email, password)
      .then(x => loginSuccess({user: {...x.providerData[0]}}))
      .catch(e => loginError({
        error: e.code === 'auth/wrong-password'
          ? 'Incorrect password'
          : e.message
      }))
  }

  switchType(e) {
    e.preventDefault()
    const { login } = this.state
    this.setState({login: !login})
  }

  render() {
    const { email, password, login } = this.state
    const { error, loading } = this.props
    return (
      <div className={css.root}>
        <div className={css.form}>
          <div className={css.header} />
          <div className={css.row}>
            <input className={css.full} name="email" onChange={this.handleInputChanges} value={email} onKeyPress={this.handleKeyPress} type="email" placeholder="Enter your email" />
          </div>
          <div className={css.row}>
            <input className={css.full} name="password" onChange={this.handleInputChanges} value={password} onKeyPress={this.handleKeyPress} type="password" placeholder="Name of school" />
          </div>
          {loading
            ? <LoadingIndicator />
            :  <div className={css.btns}>
                <span className={css.notify}>{error}</span>
                <button className={css.submit} onClick={this.handleSubmit}>{login ? 'Log In' : 'Sign Up'}</button>
                <button className={css.switch} onClick={this.switchType}>{login ? 'Need an account?' : 'Have an account?'}</button>
              </div>
          }
          <div className={css.caption} />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.auth.user,
    error: state.auth.error,
    loading: state.loading
  }),
  Actions
)(SignIn)