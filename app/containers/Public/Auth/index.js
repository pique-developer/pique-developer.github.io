import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseAuth } from 'api'
import { isLoading } from 'api/actions'
import SignIn from './SignIn'
import SignUp from './SignUp'
import css from './style.css'

export class Auth extends Component {
  state = {
    createAccount: false,
    error: '',
    signup: {
      firstname: '',
      lastname: '',
      userType: '',
      type: '',
      establishment: '',
      email: '',
      password: '',
    },
    signin: {
      email: '',
      password: '',
    },
  }

  toggleForm = _ => {
    this.setState({createAccount: !this.state.createAccount})
  }

  handleChange = nextState => {
    const { createAccount, signup, signin } = this.state
    if (createAccount) {
      this.setState({signup: { ...signup, ...nextState }})
    } else {
      this.setState({signin: { ...signin, ...nextState }})
    }
  }

  handleSubmit = _ => {
    const { createAccount, signup, signin, error } = this.state
    this.props.isLoading(true)

    if (!!error) {
      this.setState({error: ''})
    }

    if (createAccount) {
      this.submitSignUp(signup)
    } else {
      this.submitSignin(signin)
    }
  }

  submitSignUp = state => {
    const { data, valid } = Object
      .keys(state)
      .filter(x => x !== 'userType')
      .reduce((acc, x ) => {
        if (!acc.data) {
          acc.data = {}
          acc.valid = true
        }
        if (acc.valid && !!state[x]) {
          acc.data[x] = state[x]
          return acc
        }
        acc.valid = false
        return acc
      }, {})

    !valid
      ? this.showErrorMessage({message: 'All fields are required.'})
      : console.log(data)
    this.props.isLoading(false)
  }

  submitSignIn = ({ email, password }) => {
    firebaseAuth()
      .signInWithEmailAndPassword(email, password)
      .catch(this.showErrorMessage)
  }

  showErrorMessage = ({ message }) => {
    this.setState({error: message})
  }

  render() {
    const { createAccount, signup, signin, error } = this.state
    return (
      <div className={css.root}>
        {!createAccount
          ? <SignIn
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              toggleForm={this.toggleForm}
              error={error} />
          : <SignUp
              {...signup}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              toggleForm={this.toggleForm}
              error={error} />}
      </div>
    )
  }
}

export default connect(null, { isLoading })(Auth)