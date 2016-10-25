import React, { Component } from 'react'
import Header from 'components/Header'
import DebtCounter from './DebtCounter'
import Stats from './Stats'
import Waves from './Waves'
import hero from './002-hero.png'
import mask from './c-mask.png'
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
        <div className={css.hero} style={{
          backgroundImage: `url(${hero}`,
          WebkitMaskImage: `url(${mask}`,
        }}>
          <div className={css.fade} />
          <h1 className={css.h1} />
          <button className={css.btn}>Sign Up for Free!</button>
        </div>
        <DebtCounter />
        <Waves rise={this.state.rise}/>
        <Stats />
      </div>
    )
  }
}


export default Home