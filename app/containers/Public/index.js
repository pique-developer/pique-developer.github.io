import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Redirect from 'components/Redirect'
import Home from './Home'
import Auth from 'containers/Auth'
import About from './About'
import Educators from './Educators'
import Providers from './Providers'
import Students from './Students'
import Nonprofits from './Nonprofits'
import FAQ from './FAQ'
import Payment from './Payment'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import SiteScroll from './SiteScroll'
import SiteModal from './SiteModal'

export class Public extends Component {
  static defaultProps = {
    routes: [
      {pattern: '/',           component: Home, exactly: true},
      {pattern: '/about',      component: About},
      {pattern: '/signin',     component: Auth},
      {pattern: '/educators',  component: Educators},
      {pattern: '/providers',  component: Providers},
      {pattern: '/students',   component: Students},
      {pattern: '/faq',        component: FAQ},
      {pattern: '/nonprofits', component: Nonprofits},
      {pattern: '/payment',    component: Payment},
    ]
  }

  render() {
    const { routes } = this.props
    return (
      <Redirect
        to='/'
        not={routes.map(x => x.pattern)}>
        <SiteScroll />
        <SiteModal />
        <SiteHeader />
        {routes.map((x, i) =>  <Match key={i} {...x} />)}
        <SiteFooter />
      </Redirect>
    )
  }
}

export default connect(
  state => ({
    route: state.routing.route,
  })
)(Public)
