import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentsForm from './StudentsForm'
import StudentsDiagram from './StudentsDiagram'
import StudentsTimeline from './StudentsTimeline'
import StudentsJoin from './StudentsJoin'
import { startTimelineScroll, stopTimelineScroll } from 'api/actions'
import css from './style.css'

export class Students extends Component {
  constructor(props) {
    super(props)
    this.state = {
      positioning: 'top',
    }
    this.startListening = ::this.startListening
  }

  componentDidMount() {
    this.props.startTimelineScroll()
    this.startListening()
  }

  startListening() {
    this.listener = window.addEventListener('scroll', _ => {
      const scrollTop = window.scrollY
      const { positioning } = this.state

      if (scrollTop <= 1435 && positioning !== 'top') {
        return this.setState({positioning: 'top'})
      } else if (scrollTop > 1435 && scrollTop < 2435  && positioning !== 'fixed') {
        return this.setState({positioning: 'fixed'})
      } else if (scrollTop >= 2435 && positioning !== 'bottom') {
        return this.setState({positioning: 'bottom'})
      }
    })
  }

  componentWillUnmount() {
    this.props.stopTimelineScroll()
    window.removeEventListener('scroll', this.listener)
  }

  render() {
    return (
      <div className={css.root}>
        <StudentsForm />
        <StudentsDiagram />
        <StudentsTimeline positioning={this.state.positioning} />
        <StudentsJoin />
      </div>
    )
  }
}

export default connect(
  state => ({
    listening: state.scrollTop
  }),
  { startTimelineScroll, stopTimelineScroll }
)(Students)
