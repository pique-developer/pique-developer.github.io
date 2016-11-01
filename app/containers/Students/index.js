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

  }

  render() {
    return (
      <div className={css.root}>
        <StudentsForm />
        <StudentsDiagram />
        <StudentsTimeline positioning={this.props.positioning} />
        <StudentsJoin />
      </div>
    )
  }
}

export default connect(
  state => ({
    positioning: state.header.positioning,
  }),
)(Students)
