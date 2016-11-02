import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from 'api/actions'

export class Scroll extends Component {
  constructor(props) {
    super(props)
    this.resetStyles = ::this.resetStyles
    this.applyStyles = ::this.applyStyles
    this.switchView = ::this.switchView
    this.handleHeaderUI = ::this.handleHeaderUI
    this.handleStudentsUI = ::this.handleStudentsUI
    this.handleProvidersOverview = ::this.handleProvidersOverview
  }

  initialUI = {
    position: 'top',
    opacity: false,
    fill: false,
    fixed: false,
    animate1: false,
    animate2: false,
  }

  componentDidMount() {
    this.switchView()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.route !== this.props.route) {
      this.resetStyles()
    }
  }

  resetStyles() {
    this.props.styleUpdate(this.initialUI)
  }

  applyStyles(styles) {
    this.props.styleUpdate(styles)
  }

  switchView() {
    window.addEventListener('scroll', _ => {
      const scrollTop = window.scrollY
      const { route } = this.props
      if (route === '/' || route === '/about') {
        this.applyStyles({fixed: true})
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
    const opacityThreshold = route === '/' ? 300 : 100
    const fillThreshold = route === '/' ? 440 : 240

    if (scrollTop > fillThreshold && !ui.fill) {
      this.applyStyles({fill: true})
    } else if (scrollTop <= fillThreshold && ui.fill) {
      this.applyStyles({fill: false})
    }

    if (scrollTop > opacityThreshold && !ui.opacity) {
      this.applyStyles({opacity: true})
    } else if (scrollTop <= opacityThreshold && ui.opacity) {
      this.applyStyles({opacity: false})
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
    route: state.route,
    ui: state.ui,
  }),
  Actions
)(Scroll)