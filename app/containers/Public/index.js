import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Redirect from 'components/Redirect'
import Home from './Home'
import About from './About'
import Educators from './Educators'
import Providers from './Providers'
import Students from './Students'
import Nonprofits from './Nonprofits'
import FAQ from './FAQ'
import Payment from './Payment'
import Auth from './Auth'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import SiteScroll from './SiteScroll'
import SiteModal from './SiteModal'

export class Public extends Component {
  site = [
    {pattern: '/',           component: Home, exactly: true},
    {pattern: '/about',      component: About},
    {pattern: '/educators',  component: Educators},
    {pattern: '/providers',  component: Providers},
    {pattern: '/students',   component: Students},
    {pattern: '/faq',        component: FAQ},
    {pattern: '/nonprofits', component: Nonprofits},
    {pattern: '/payment',    component: Payment},
    {pattern: '/signin',     component: Auth},
  ]

  render() {
    return (
      <Redirect
        to="/"
        not={this.site.map(x => x.pattern)}>
        <SiteScroll />
        <SiteModal />
        <SiteHeader />
        {this.site.map((x, i) =>  <Match key={i} {...x} />)}
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
