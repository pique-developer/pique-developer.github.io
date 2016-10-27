import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hero from './Hero'
import DebtCounter from './DebtCounter'
import Stats from './Stats'
import Waves from './Waves'
import EducatorsCard from './EducatorsCard'
import DCBanner from './DCBanner'
import { launchModal } from 'api/actions'
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
        <Hero onClick={this.props.launchModal}/>
        <DebtCounter />
        <Waves rise={this.state.rise}/>
        <Stats />
        <EducatorsCard />
        <DCBanner />
      </div>
    )
  }
}


export default connect(null, { launchModal })(Home)