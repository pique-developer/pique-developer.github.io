import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import MembersHeader from './MembersHeader'
import ApplicantsNav from './Dashboard/ApplicantsNav'
import ApplicantCards from './Dashboard/ApplicantCards'
import Committee from './Committee'
import MembersSidebar from './MembersSidebar'
import Redirect from 'components/Redirect'
import * as API from 'api'
import * as Actions from 'api/actions'
import css from './style.css'

export class MembersRoutes extends Component {
  sidebar = [{
    title: 'Applications',
    links: [
      {to: '/dashboard/new', text: 'New'},
      {to: '/dashboard/reviewed', text: 'Reviewed'},
      {to: '/dashboard/interviewees', text: 'Interviewees'},
      {to: '/dashboard/finalists', text: 'Finalists'},
    ],
  },{
    title: 'Selection Committee',
    links: [
      {to: '/committee', text: 'Committee Page'},
      {to: '/invite', text: 'Invite Members'},
    ],
  }]

  dashboard = {
    routes: [
      {pattern: 'new',          key: 'new'},
      {pattern: 'reviewed',     key: 'reviewed'},
      {pattern: 'interviewees', key: 'interviewees'},
      {pattern: 'finalists',    key: 'finalists'},
    ],
    links: [
      {to: '/dashboard/new', key: 'new', text: 'New Applicants'},
      {to: '/dashboard/reviewed', key: 'reviewed', text: 'Reviewed Applicants'},
      {to: '/dashboard/interviewees', key: 'interviewees', text: 'Interviewees'},
      {to: '/dashboard/finalists', key: 'finalists', text: 'Finalists'},
    ]
  }

  componentDidMount() {
    const { fetchSuccess, fetchError } = this.props
    API.fetchApplicants({
      next: applicants => fetchSuccess({ applicants }),
      error: e => fetchError({error: e}),
    })
  }

  render() {
    const { applicants } = this.props
    const dashboardLinks = this.dashboard.links
      .map(x => ({...x, count: applicants[x.key].length}))
    return (
      <Redirect
        to="/dashboard/new"
        any={['/signin', '/']}>

        <MembersHeader />

        <div className={css.root}>

          <MembersSidebar links={this.sidebar} />

          <div className={css.main}>
            <div className={css.wrap}>

              <Match pattern="/dashboard" render={props =>
                <div>
                  <ApplicantsNav links={dashboardLinks} />
                  {this.dashboard.routes.map(x =>
                    <Match key={x.key} pattern={x.pattern} render={props =>
                      <ApplicantCards {...props} items={applicants[x.key]} />
                    } />
                  )}
                </div>
              } />

              <Match pattern="/committee" component={Committee} />
            </div>
          </div>

        </div>
      </Redirect>
    )
  }
}

export default connect(
  state => {
    const { applicants } = state.app
    return {
      applicants,
    }
  },
  Actions
)(MembersRoutes)
