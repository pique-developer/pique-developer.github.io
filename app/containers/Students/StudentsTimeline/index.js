import React, { Component } from 'react'
import img1 from './502-student.png'
import TimelineDots from './TimelineDots'
import css from './style.css'

export class StudentsTimeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      top: '-45px',
      position: 'absolute',
      bottom: 'auto',
      right: 0,
      left: 0,
      margin: '0 auto',
    }
    this.listenForScroll = ::this.listenForScroll
  }

  componentDidMount() {
    this.listenForScroll()
  }

  componentWillUnmount() {
    window.removeListener('scroll', this.listener)
  }

  listenForScroll() {
    this.listener = window.addEventListener('scroll', _ => {
      const { fill } = this.state
      const scrollTop = window.scrollY
      if (scrollTop <= 1580) {
        this.setState({top: '-45px', position: 'absolute', bottom: 'auto'})
      } else if (scrollTop > 1580 && scrollTop < 2580) {
        this.setState({top: '45px', position: 'fixed'})
      } else if (scrollTop >= 2580) {
        this.setState({top: 'auto', position: 'absolute', bottom: '120px'})
      }
    })
  }

  render() {
    return (
      <div className={css.root}>
        <div className={css.header}>The Pique Way</div>
        <div className={css.timeline}>
          <img src={img1} style={this.state} />
          <TimelineDots value={6} />
        </div>
      </div>
    )
  }
}

export default StudentsTimeline
