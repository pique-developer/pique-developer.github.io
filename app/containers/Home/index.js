import React, { Component } from 'react'
import Hero from './Hero'
import DebtCounter from './DebtCounter'
import StatsCounter from './StatsCounter'
import Waves from './Waves'
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
        <Hero />
        <DebtCounter />
        <Waves rise={this.state.rise} />
        <StatsCounter />
        <FactsStatement />
        <ScholarshipsOverview />
        <HomeEducators />
        <DCBanner />
      </div>
    )
  }
}

export default Home