import React from 'react'
import logo from './001-logo.png'
import css from './style.css'

export const Modal = props => {
  return (
    <div className={css.root}>
      <div className={css.logo}>
        <img src={logo} />
      </div>
      <div className={css.content}>
        <div className={css.header} />
        <span className={css.caption} />

        <form>
          <div className={css.row}>
            <input
              className={css.firstname}
              type="text"
              placeholder="First Name" />
            <input
              className={css.lastname}
              type="text"
              placeholder="Last Name" />
          </div>
          <div className={css.row}>
            <input
              className={css.email}
              type="email"
              placeholder="Enter your email" />
          </div>
          <div className={css.row}>
            <input
              className={css.city}
              type="text"
              placeholder="City" />
            <input
              className={css.state}
              type="text"
              placeholder="State" />
          </div>

          <select id="p-login-type" className="form-control">
            <option value="">I am a..</option>
            <option value="student">Student</option>
            <option value="scholarship foundation">Scholarship Foundation</option>
            <option value="teacher">Teacher</option>
            <option value="counselor">Counselor</option>
            <option value="nonprofit">Nonprofit</option>
            <option value="supporter">Supporter</option>
          </select>
          <div id="login-school">
            <input type="text" placeholder="Name of school" />
          </div>
          <div id="login-nonprofit">
            <input type="text" placeholder="Name of non-profit" />
          </div>
          <div id="login-employer">
            <input type="text" placeholder="Name of employer" />
          </div>
          <div className="terms small-grey-text">
            <div>By signing up, you agree to Pique Basic rules,</div>
            <div>Terms of service, and Privacy Policy</div>
          </div>
          <span className="p-notify"></span>
          <button id="p-submit" type="submit" className="submit-button log-in">Sign Up</button>
        </form>
      </div>
      <span className="copyright">Pique&nbsp;&#169;</span>
    </div>
  )
}

export default Modal