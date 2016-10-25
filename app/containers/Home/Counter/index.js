import React, { Component } from 'react'
import css from './style.css'

export class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      total: 37172,
      num: '',
    }
    this.increment = this.increment.bind(this)
  }

  componentDidMount() {
    this.increment()
  }

  increment() {
    const { counter, total } = this.state
    if (counter < total) {
      const amount = counter + 102
      this.setState({counter: amount, num: amount.toString()})
      setTimeout(this.increment, 10)
    } else if (counter >= total) {
      const amount = total
      this.setState({counter: amount, num: amount.toString()})
    }
  }

  render() {
    return (
      <div className={css.root}>
        <h3 className={css.title}>Rising Tuition. Rising Debt.</h3>
        <h2 className={css.price}>${this.state.num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')}</h2>
        <h6 className={css.label} />
      </div>
    )
  }
}

export default Counter