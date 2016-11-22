import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'components/Select'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      selectedIndex: 0,
      type: false,
      selected: 'placeholder',
      establishment: '',
      email: '',
      password: '',
    }
    this.handleInputChanges = ::this.handleInputChanges
    this.handleSelectChange = ::this.handleSelectChange
    this.handleKeyPress = ::this.handleKeyPress
    this.handleSubmit = ::this.handleSubmit
  }

  options = [
    { value: 'placeholder', text: 'I am a...', type: 'school' },
    { value: 'student', text: 'Student', type: 'school' },
    { value: 'scholarship foundation', text: 'Scholarship Foundation', type: 'foundation' },
    { value: 'teacher', text: 'Teacher', type: 'school' },
    { value: 'counselor', text: 'Counselor', type: 'school' },
    { value: 'nonprofit', text: 'Nonprofit', type: 'nonprofit' },
    { value: 'supporter', text: 'Supporter', type: 'employer' },
  ]

  placeholders = {
    school: 'Name of school',
    nonprofit: 'Name of non-profit',
    employer: 'Name of employer',
    foundation: 'Name of foundation',
  }

  componentDidMount() {
    this.autoFocus.focus()
  }

  handleSelectChange(e) {
    const { selectedIndex } = e.target.options
    if (selectedIndex !== 0) {
      this.setState({
        establishment: '',
        selected: this.options[selectedIndex].value,
        type: this.options[selectedIndex].type
      })
    }
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
  }

  render() {
    const { firstname, lastname, email, password, selected, establishment, type } = this.state
    const { switchForm, error } = this.props
    return (
      <div className={css.root}>
        <div className={css.header} />
        <div className={css.row}>
          <input
            className={css.firstname}
            name="firstname"
            ref={i => this.autoFocus = i}
            value={firstname}
            onChange={this.handleInputChanges}
            type="text"
            placeholder="First Name" />
          <input
            name="lastname"
            className={css.lastname}
            value={lastname}
            onChange={this.handleInputChanges}
            type="text"
            placeholder="Last Name" />
        </div>

        <div className={css.row}>
          <input
            name="email"
            className={css.full}
            value={email}
            onChange={this.handleInputChanges}
            onKeyPress={this.handleKeyPress}
            type="email"
            placeholder="Enter your email" />
        </div>

        <Select
          options={this.options}
          value={this.state.selected}
          onChange={this.handleSelectChange} />
        {type
          ? <div className={css.row}>
              <input
                name="establishment"
                className={css.full}
                value={establishment}
                onChange={this.handleInputChanges}
                placeholder={this.placeholders[type]}
                type="text" />
            </div>
          : null
        }

        <div className={css.row}>
          <input
            name="password"
            className={css.full}
            value={password}
            onChange={this.handleInputChanges}
            onKeyPress={this.handleKeyPress}
            type="password"
            placeholder="Password" />
        </div>

        <div className={css.caption} />
        <div className={css.btns}>
          <span className={css.notify}>{error}</span>
          <button className={css.submit} onClick={this.handleSubmit}>Sign Up</button>
          <button className={css.switch} onClick={switchForm}>Have an account?</button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    error: state.auth.error,
  }),
  Actions)
(SignUp)