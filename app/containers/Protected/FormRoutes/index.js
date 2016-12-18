import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import ScholarshipPost from '../ScholarshipPost'
import StudentQuestionnaire from '../StudentQuestionnaire'

export class FormRoutes extends Component {
  static defaultProps = {
    routes: [
      {pattern: '/scholarship-post', component: ScholarshipPost},
      {pattern: '/student-questionnaire', component: StudentQuestionnaire}
    ]
  }

  render() {
    const { routes } = this.props
    return (
      <div>
        {routes.map(({ component:Component, pattern }) =>
          <Match pattern={pattern} key={pattern} render={props => {
            return <Component {...props} />
          }}/>
        )}
      </div>
    )
  }
}

/*
  TODO: Add back in route handling based on user sign up

  getNewUserForm() {
    const { type } = this.props.user
    switch (type) {
      case 'provider':
        return {
          component: ScholarshipPost,
          pathname: '/scholarship-post/general',
        }
      case 'student':
      default:
        return {
          component: StudentQuestionnaire,
          pathname: '/student-questionnaire',
        }
    }
  }

  const { component, pathname } = this.getNewUserForm()
  const { isNew } = this.props

  <MatchWhenNew
    pattern='/'
    isNew={isNew}
    component={component} />

  <MatchWhenReturning
    pattern='/'
    isNew={isNew}
    component={InApp}
    pathname={pathname} />

*/

export default connect(
  state => ({
    ...state
  })
)(FormRoutes)
