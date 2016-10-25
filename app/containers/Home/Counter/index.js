import React, { Component } from 'react'
import css from './style.css'

export class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {counter: 0}
    this.increment = this.increment.bind(this)
  }

  componentDidMount() {
    this.increment()
  }

  increment() {
    const { counter } = this.state
    const { interval, increment, total } = this.props
    if (counter < total) {
      this.setState({counter: counter + increment})
      setTimeout(this.increment, interval)
    } else if (counter >= total) {
      this.setState({counter: total})
    }
  }

  render() {
    const { transform } = this.props
    const { counter } = this.state
    return (
      <span>
        {transform ? transform(counter) : counter}
      </span>
    )
  }
}

export default Counter