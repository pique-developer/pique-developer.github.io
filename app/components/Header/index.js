import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import { launchModal } from 'api/actions'
import logo from './001-logo.png'
import css from './style.css'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fill: false
    }

    this.listenForScroll = ::this.listenForScroll
    this.applyStyleUpdates = ::this.applyStyleUpdates
    this.stopListeningForScroll = ::this.stopListeningForScroll
  }

  componentDidMount() {
    this.applyStyleUpdates(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.applyStyleUpdates(nextProps)
  }

  componentWillUnmount() {
    this.stopListeningForScroll()
  }

  applyStyleUpdates(nextProps) {
    const { fill } = this.state
    if (nextProps.pathname === '/' && !fill) {
      this.listenForScroll()
    } else if (nextProps.pathname !== '/' && fill) {
      this.stopListeningForScroll()
    }
  }

  handleFill(fill) {
    this.setState({ fill })
  }

  stopListeningForScroll() {
    this.handleFill(false)
    window.removeEventListener('scroll', this.listener)
  }

  listenForScroll() {
    this.listener = window.addEventListener('scroll', _ => {
      const { fill } = this.state
      const scrollTop = window.scrollY
      if (scrollTop > 440 && !fill) {
        this.handleFill(true)
      } else if (scrollTop <= 440 && fill){
        this.handleFill(false)
      }
    })
  }

  render() {
    const { fill } = this.state
    const { launchModal } = this.props
    return (
      <div className={`${css.root} ${fill ? css.fill : ''}`}>
        <div className={css.brand}>
          <Link to="/"><img className={css.img} src={logo} /></Link>
        </div>
        <div className={css.links}>
          <div className={css.nav}>
            <Link
              className={css.link}
              activeClassName={css.selected}
              to="/about">About Us</Link>
            <Link
              className={css.link}
              activeClassName={css.selected}
              to="/educators">Educators</Link>
            <Link
              className={css.link}
              activeClassName={css.selected}
              to="/providers">Scholarship Providers</Link>
            <Link
              className={css.link}
              activeClassName={css.selected}
              to="/students">Students</Link>
          </div>
           <div className={css.btn} onClick={launchModal}>Sign Up</div>
        </div>
      </div>
    )
  }
}

export default connect(null, { launchModal })(Header)