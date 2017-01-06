import React, { Component } from 'react'
import Select from 'components/Select'
import css from './style.css'

export class SignUp extends Component {
  static defaultProps = {
    userTypes: [
      {text: 'I am a...'},
      {type: 'school', value: 'student', text: 'Student', placeholder: 'Name of school'},
      {type: 'foundation', value: 'scholarship foundation', text: 'Scholarship Foundation', placeholder: 'Name of foundation'},
      {type: 'school', value: 'teacher', text: 'Teacher', placeholder: 'Name of school'},
      {type: 'school', value: 'counselor', text: 'Counselor', placeholder: 'Name of school'},
      {type: 'nonprofit', value: 'nonprofit', text: 'Nonprofit', placeholder: 'Name of non-profit'},
      {type: 'employer', value: 'supporter', text: 'Supporter', placeholder: 'Name of employer'},
    ],
  }

  handleSelect = ({ target }) => {
    const { selectedIndex } = target.options
    const { userTypes, handleChange } = this.props
    handleChange({
      type: userTypes[selectedIndex].type,
      userType: userTypes[selectedIndex],
    })
  }

  handleKeyPress = e => {
    if (e.charCode == 13) {
      e.preventDefault()
      this.props.handleSubmit()
    }
  }

  handleClick = e => {
    e.preventDefault()
    this.props.handleSubmit()
  }

  handleChange = ({ target }) => {
    this.props.handleChange({[target.name]: target.value})
  }

  render() {
    const {
      firstname, lastname, email, password, establishment,
      userType, userTypes, error, toggleForm
    } = this.props
    return (
      <div className={css.root}>
        <div className={css.header} />
        <form onKeyPress={this.handleKeyPress}>
          <div className={css.row}>
            <input
              autoFocus
              onChange={this.handleChange}
              value={firstname}
              name="firstname"
              type="text"
              className={css.firstname}
              placeholder="First Name" />

            <input
              className={css.lastname}
              value={lastname}
              onChange={this.handleChange}
              name="lastname"
              type="text"
              placeholder="Last Name" />
          </div>

          <div className={css.row}>
            <input
              onChange={this.handleChange}
              value={email}
              name="email"
              type="email"
              className={css.full}
              placeholder="Enter your email" />
          </div>

          <Select
            options={userTypes}
            value={userType.value}
            onChange={this.handleSelect} />

          {userType.placeholder
            ? <div className={css.row}>
                <input
                  value={establishment}
                  onChange={this.handleChange}
                  className={css.full}
                  placeholder={userType.placeholder}
                  name="establishment"
                  type="text" />
              </div>
            : null}

          <div className={css.row}>
            <input
              name="password"
              value={password}
              onChange={this.handleChange}
              className={css.full}
              type="password"
              placeholder="Password" />
          </div>

          <div className={css.caption} />

          <div className={css.btns}>
            <span className={css.notify}>{error}</span>
            <button
              onClick={this.handleClick}
              className={css.submit}>
              Sign Up
            </button>
            <button
              onClick={toggleForm}
              type="button"
              className={css.switch}>
              Have an account?
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp