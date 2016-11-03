import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from 'api/actions'

export class Scroll extends Component {
  constructor(props) {
    super(props)
    this.resetStyles = ::this.resetStyles
    this.resetScroll = ::this.resetScroll
    this.applyStyles = ::this.applyStyles
    this.switchView = ::this.switchView
    this.handleHeaderUI = ::this.handleHeaderUI
    this.handleStudentsUI = ::this.handleStudentsUI
    this.handleProvidersOverview = ::this.handleProvidersOverview
  }

  initialUI = {
    position: 'top',
    opacityInc: 0,
    opacityDec: 1,
    fill: false,
    fixed: false,
    animate1: false,
    animate2: false,
  }

  componentDidMount() {
    this.switchView()
    this.resetScroll(!!this.props.hash)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.route !== this.props.route) {
      this.resetStyles()
      this.resetScroll(!!nextProps.hash)
    }
  }

  resetStyles() {
    this.props.styleUpdate(this.initialUI)
  }

  resetScroll(hash) {
    window.scrollTo(0, hash ? 900 : 0)
  }

  applyStyles(styles) {
    this.props.styleUpdate(styles)
  }

  switchView() {
    window.addEventListener('scroll', _ => {
      const scrollTop = window.scrollY
      const { route, fixed } = this.props
      if (route === '/' || route === '/about' && !fixed) {
        this.handleHeaderUI(scrollTop)
        if (route === '/') {
          this.handleProvidersOverview(scrollTop)
        }
      } else if (route === '/students') {
        this.handleStudentsUI(scrollTop)
      }
    })
  }

  handleHeaderUI(scrollTop) {
    const { ui, route } = this.props
    const threshold = route === '/' ? 450 : 280

    if (!ui.fixed && scrollTop) {
      this.applyStyles({fixed: true})
    }

    if (scrollTop > threshold + 30 && !ui.fill) {
      this.applyStyles({fill: true})
    } else if (scrollTop <= threshold + 30 && ui.fill) {
      this.applyStyles({fill: false})
    }

    if (scrollTop < threshold) {
      const opacity = scrollTop / threshold
      this.applyStyles({
        opacityInc: opacity,
        opacityDec: 1 - opacity || 1
      })
    }
  }

  handleStudentsUI(scrollTop) {
    const { position } = this.props.ui
    if (scrollTop <= 1600 && position !== 'top') {
      this.applyStyles({position: 'top'})
    } else if (scrollTop > 1600 && scrollTop < 2600  && position !== 'fixed') {
      this.applyStyles({position: 'fixed'})
    } else if (scrollTop >= 2600 && position !== 'bottom') {
      this.applyStyles({position: 'bottom'})
    }
  }

  handleProvidersOverview(scrollTop) {
    const { animate1, animate2 } = this.props.ui
    if (scrollTop > 1421 && !animate1) {
      this.applyStyles({animate1: true})
    }

    if (scrollTop > 921 && !animate2) {
      this.applyStyles({animate2: true})
    }
  }

  render() {
    return null
  }
}

export default connect(
  state => ({
    route: state.routing.route,
    hash: state.routing.hash,
    ui: state.ui,
  }),
  Actions
)(Scroll)