import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import Home from 'site/Home'
import About from 'site/About'
import Educators from 'site/Educators'
import Providers from 'site/Providers'
import Students from 'site/Students'
import Nonprofits from 'site/Nonprofits'
import FAQ from 'site/FAQ'
import Payment from 'site/Payment'
import SiteHeader from 'site/SiteHeader'
import SiteFooter from 'site/SiteFooter'
import SiteModal from 'components/Modal'
import SiteScroll from 'site/SiteScroll'

export class Routes extends Component {
  site = [
    {pattern: '/',          component: Home, exactly: true},
    {pattern: '/about',     component: About},
    {pattern: '/educators', component: Educators},
    {pattern: '/providers', component: Providers},
    {pattern: '/students',  component: Students},
    {pattern: 'faq',        component: FAQ},
    {pattern: 'nonprofits', component: Nonprofits},
    {pattern: 'payment',    component: Payment},
  ]

  render() {
    return (
      <div>
        <SiteScroll />
        <SiteModal />
        <SiteHeader />
        {this.site.map((x, i) =>  <Match key={i} {...x} />)}
        <SiteFooter />
      </div>
    )
  }
}



export default connect(
  state => ({
    ...state
  })
)(Routes)
