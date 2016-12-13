import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.handleInputChanges = ::this.handleInputChanges
    this.handleKeyPress = ::this.handleKeyPress
    this.handleSubmit = ::this.handleSubmit
  }

  componentDidMount() {
    this.autoFocus.focus()
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
          : console.log(e) || e.message
      }))
  }



  render() {
    const { email, password } = this.state
    const { switchForm, error } = this.props
    return (
      <div className={css.root}>
        <div className={css.header} />
        <div className={css.row}>
          <input
            className={css.full}
            ref={i => this.autoFocus = i}
            name="email"
            onChange={this.handleInputChanges}
            value={email}
            onKeyPress={this.handleKeyPress}
            type="email"
            placeholder="Enter your email" />
        </div>
        <div className={css.row}>
          <input
            className={css.full}
            name="password"
            onChange={this.handleInputChanges}
            value={password}
            onKeyPress={this.handleKeyPress}
            type="password"
            placeholder="Password" />
        </div>
        <div className={css.btns}>
          <span className={css.notify}>{error}</span>
          <button
            className={css.submit}
            onClick={this.handleSubmit}>Log In</button>
          <button
            className={css.switch}
            onClick={switchForm}>Need an account</button>
        </div>
        <div className={css.caption} />
      </div>
    )
  }
}

export default connect(
  state => ({
    error: state.auth.error,
  }),
  Actions)
(SignIn)