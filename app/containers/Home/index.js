import React, { Component } from 'react'
import Header from 'components/Header'
import Hero from './Hero'
import DebtCounter from './DebtCounter'
import Stats from './Stats'
import Waves from './Waves'
import EducatorsCard from './EducatorsCard'
import DCBanner from './DCBanner'
import Footer from 'components/Footer'
import css from './style.css'

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
        <Header />
        <Hero />
        <DebtCounter />
        <Waves rise={this.state.rise}/>
        <Stats />
        <EducatorsCard />
        <DCBanner />
        <Footer />
      </div>
    )
  }
}


export default Home