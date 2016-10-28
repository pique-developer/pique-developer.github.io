import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitForm, removeModal } from 'api/actions'
import heart from './110-heart.png'
import css from './style.css'

export class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: 0,
      firstname: '',
      lastname: '',
      city: '',
      state: '',
      type: false,
      selected: 'placeholder',
      establishment: '',
      error: '',
      entering: false,
      leaving: false,
    }

    this.handleSelectUpdate = ::this.handleSelectUpdate
    this.handleInputChanges = ::this.handleInputChanges
    this.handleSubmit = ::this.handleSubmit
    this.onLeave = ::this.onLeave
    this.updateVisibilty = ::this.updateVisibilty
  }

  componentDidMount() {
    this.updateVisibilty(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.updateVisibilty(nextProps)
  }

  updateVisibilty(nextProps) {
    if (nextProps.open) {
      this.onEnter()
    } else if (!nextProps.open && this.state.entering) {
      this.onLeave()
    }
  }

  onEnter() {
    setTimeout(_ => this.setState({entering: true}), 200)
  }

  onLeave() {
    this.setState({leaving: true})
    setTimeout(_ => {
      this.setState({entering: false, leaving: false})
      this.props.removeModal()
    }, 200)
  }

  options = [
    { value: 'placeholder', text: 'I am a...', type: 'school' },
    { value: 'student', text: 'Student', type: 'school' },
    { value: 'scholarship foundation', text: 'Scholarship Foundation', type: 'school' },
    { value: 'teacher', text: 'Teacher', type: 'school' },
    { value: 'counselor', text: 'Counselor', type: 'school' },
    { value: 'nonprofit', text: 'Nonprofit', type: 'nonprofit' },
    { value: 'supporter', text: 'Supporter', type: 'employer' },
  ]

  placeholders = {
    school: 'Name of school',
    nonprofit: 'Name of non-profit',
    employer: 'Name of employer',
  }

  handleSelectUpdate(e) {
    const { selectedIndex } = e.target.options
    if (selectedIndex !== 0) {
      this.setState({
        establishment: '',
        selected: this.options[selectedIndex].value,
        type: this.options[selectedIndex].type
      })
    }
  }

  handleInputChanges(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const { firstname, lastname, city, state, email, establishment } = this.state
    if (
      !!firstname
      && !!lastname
      && !!city
      && !!state
      && !!email
      && !!establishment
    ) {
      this.props.submitForm({
        firstname,
        lastname,
        city,
        state,
        email,
        establishment,
      })
    } else {
      this.setState({error: 'All fields are required'})
    }
  }

  render() {
    const { entering, leaving } = this.state
    const { open, formSubmitted } = this.props

    if (!open) {
      return null
    }

    return (
      <div className={css.root}>
        <div className={`${css.content} ${entering && leaving ? css.leave : entering && !leaving ? css.enter : ''}`}>

          {formSubmitted
            ? <div className={css.confirmation}>
                <img src={heart} />
                <div className={css.thanks}>
                  <div className={css.message}>Thank for signing up the Pique!</div>
                  <div className={css.message}>Help us spread the word by sharing Pique with</div>
                  <div className={css.message}>friend family let's end student debt!</div>
                </div>

                <div className={css.share}>
                  <div className={css.icon}>
                    <div className={css.tw}>
                      <svg width="16px" height="52px" viewBox="17 10 16 31">
                      <path id="FB-Logo" stroke="none" fill="#FFFFFF" fillRule="evenodd" d="M27.0319309,26.560943 L31.8921194,26.560943 L33,21.410765 L27.0319309,21.410765 L27.0319309,17.8583924 C27.0319309,16.2828177 27.825621,15.2870729 30.0996609,15.2870729 L33,15.2857219 L33,10.4184906 C32.4981176,10.3522899 30.7766786,10.2040816 28.7737722,10.2040816 C24.5921441,10.2040816 22.0072408,12.740653 22.0072408,17.3980689 L22.0072408,21.410765 L17,21.4107648 L17,26.560943 L22.0072408,26.560943 L22.0072408,40.8163265 L27.0319309,40.8163265 L27.0319309,26.560943 Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className={css.icon}>
                    <div className={css.fb}>
                      <svg width="26px" height="52px" viewBox="13 14 26 23">
                        <path id="Twitter-Logo" stroke="none" fill="#FFFFFF" fillRule="evenodd" d="M21.1768902,36.7346939 C18.1645269,36.7346939 15.3606277,35.7965327 13,34.1885739 C13.4173086,34.2409129 13.8419401,34.2676887 14.2724679,34.2676887 C16.7715644,34.2676887 19.071612,33.3616584 20.8971945,31.8417059 C18.5630052,31.7959345 16.5930575,30.1574615 15.9143129,27.9058747 C16.2399429,27.9720562 16.5741322,28.0075215 16.9178317,28.0075215 C17.4043747,28.0075215 17.8756063,27.9383087 18.3232525,27.8087748 C15.8829291,27.288214 14.0443176,24.9976255 14.0443176,22.2517485 C14.0443176,22.2279029 14.0443176,22.2041584 14.0446981,22.1805149 C14.7639563,22.6049861 15.5864004,22.8599114 16.4608654,22.8893142 C15.0295768,21.8730487 14.0877794,20.1383851 14.0877794,18.1722377 C14.0877794,17.1336422 14.3508321,16.1601169 14.8099857,15.3230973 C17.440894,18.7518061 21.3713742,21.0080408 25.80466,21.2443746 C25.7137423,20.8296033 25.6664765,20.3970488 25.6664765,19.9528747 C25.6664765,16.8231447 28.054874,14.2857143 31.0008559,14.2857143 C32.5350452,14.2857143 33.9213505,14.9740023 34.8944365,16.0754449 C36.1094627,15.821227 37.2510699,15.3495699 38.2816928,14.7001825 C37.8834047,16.0235101 37.0376605,17.1341475 35.9362815,17.8355707 C37.0153115,17.6985598 38.0433666,17.3939226 39,16.9431809 C38.2848312,18.0796846 37.3804089,19.0778638 36.3382786,19.8768922 C36.3485497,20.1198947 36.3536852,20.3643117 36.3536852,20.6100422 C36.3536852,28.0990642 30.9883975,36.7346939 21.1768902,36.7346939"></path>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            : <div>
                <div className={css.header} />
                <span className={css.caption} />
                <form>
                  <div className={css.row}>
                    <input className={css.firstname} name="firstname" onChange={this.handleInputChanges} value={this.state.firstname} type="text" placeholder="First Name" />
                    <input className={css.lastname} name="lastname" onChange={this.handleInputChanges} value={this.state.lastname} type="text" placeholder="Last Name" />
                  </div>
                  <div className={css.row}>
                    <input className={css.full} name="email" onChange={this.handleInputChanges} value={this.state.email} type="text" placeholder="Enter your email" />
                  </div>
                  <div className={css.row}>
                    <input className={css.city} name="city" onChange={this.handleInputChanges} value={this.state.city} type="text" placeholder="City" />
                    <input className={css.state} name="state" onChange={this.handleInputChanges} value={this.state.state} type="text" placeholder="State" />
                  </div>
                  <select
                    className={css.select}
                    value={this.state.selected}
                    onChange={this.handleSelectUpdate}>
                    {this.options.map((x, i) => <option key={i} value={x.value}>{x.text}</option>)}
                  </select>

                  {this.state.type
                    ? <div className={css.row}>
                        <input className={css.full} name="establishment" onChange={this.handleInputChanges} value={this.state.establishment} type="text" placeholder={this.placeholders[this.state.type]} />
                      </div>
                    : null
                  }

                  <span className={css.notify}>{this.state.error}</span>
                  <button className={css.submit} onClick={this.handleSubmit}>Sign Up</button>
                </form>
              </div>
            }
          </div>
        <div className={`${css.curtain} ${leaving ? css.leave : ''}`} onClick={this.onLeave} />
      </div>
    )
  }
}

export default connect(
  state => ({
    formSubmitted: state.formSubmitted,
    open: state.open,
  }),
  { submitForm, removeModal }
)(Modal)