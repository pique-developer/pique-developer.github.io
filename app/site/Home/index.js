import React, { Component } from 'react'
import HomeHero from './HomeHero'
import DebtCounter from './DebtCounter'
import HomeCounters from './HomeCounters'
import FactsStatement from './FactsStatement'
import HomeEducators from './HomeEducators'
import ScholarshipsOverview from './ScholarshipsOverview'
import DCBanner from './DCBanner'

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {rise: false}
  }

  componentDidMount() {
    this.timeout = setTimeout(_ => this.setState({ rise: true }), 500)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <div>
        <HomeHero />
        <DebtCounter />
        <HomeCounters />
        <FactsStatement />
        <ScholarshipsOverview />
        <HomeEducators />
        <DCBanner />
      </div>
    )
  }
}

export default Home