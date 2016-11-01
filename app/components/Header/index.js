import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import { launchModal, applyStyleToHeader } from 'api/actions'
import logo from './001-logo.png'
import css from './style.css'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fill: false,
      fixed: false,
    }

    this.listenForScroll = ::this.listenForScroll
    this.applyStyleUpdates = ::this.applyStyleUpdates
    this.stopListeningForScroll = ::this.stopListeningForScroll
    this.handleOpacity == ::this.handleOpacity
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
    const { fill, hidden } = this.state
    const { pathname } = nextProps

    if (pathname === '/') {
      this.setState({fixed: true})
    } else {
      this.setState({fixed: false})
    }

    if (pathname === '/' || pathname === '/about') {
      this.listenForScroll(pathname)
    } else if (pathname !== '/' || pathname !== '/about') {
      this.handleOpacity(false)
      this.stopListeningForScroll(pathname)
    }
  }

  handleFill(fill) {
    this.setState({ fill })
  }

  handleOpacity(fill) {
    this.props.applyStyleToHeader({ fill })
  }

  stopListeningForScroll() {
    this.handleFill(false)
    this.handleOpacity(false)
    window.removeEventListener('scroll', this.listener)
  }

  listenForScroll(pathname) {
    this.listener = window.addEventListener('scroll', _ => {
      const scrollTop = window.scrollY
      const isHomepage = pathname === '/'
      const threshold = isHomepage ? 300 : 100
      const fill = this.state.fill
      const opacity = this.props.fill

      if (isHomepage) {
        if (scrollTop > 440 && !fill) {
          this.handleFill(true)
        } else if (scrollTop <= 440 && fill) {
          this.handleFill(false)
        }
      }

      if (scrollTop > threshold && !opacity) {
        this.handleOpacity(true)
      } else if (scrollTop <= threshold && opacity) {
        this.handleOpacity(false)
      }
    })
  }

  render() {
    const { fill, fixed } = this.state
    const { launchModal } = this.props

    return (
      <div className={`${css.root} ${fill ? css.fill : ''} ${fixed ? css.fixed : ''}`}>
        <div className={css.brand}>
          <Link to="/"><img className={css.img} src={logo} /></Link>
        </div>
        <div className={css.links}>
          <div className={css.nav}>
            <Link
              className={css.link}
              activeClassName={css.active}
              to="/about">About Us <div className={css.selected}/> </Link>
            <Link
              className={css.link}
              activeClassName={css.active}
              to="/educators">Educators <div className={css.selected}/> </Link>
            <Link
              className={css.link}
              activeClassName={css.active}
              to="/providers">Scholarship Providers <div className={css.selected}/> </Link>
            <Link
              className={css.link}
              activeClassName={css.active}
              to="/students">Students <div className={css.selected}/> </Link>
          </div>
           <div className={css.btn} onClick={launchModal}>Sign Up</div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    fixed: state.header.fixed,
    fill: state.header.fill,
  }),
  { launchModal, applyStyleToHeader }
)(Header)