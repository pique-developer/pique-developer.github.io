import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import DiscoveryNav from './DiscoveryNav'
import DiscoveryCards from './DiscoveryCards'
import css from './style.css'

export class Discovery extends Component {
  constructor(props) {
    super(props)
    this.computeRoutingState = ::this.computeRoutingState
  }

  static defaultProps = {
    routes: [
      {pattern: '/discovery/all',      key: 'all'},
      {pattern: '/discovery/national', key: 'national'},
      {pattern: '/discovery/niche',    key: 'niche'},
      {pattern: '/discovery/local',    key: 'local'},
      {pattern: '/discovery/based',    key: 'based'},
    ],
    links: [
      {to: '/discovery/all',      key: 'all',      text: 'All Scholarships'},
      {to: '/discovery/national', key: 'national', text: 'National Scholarships'},
      {to: '/discovery/niche',    key: 'niche',    text: 'Niche National Scholarships'},
      {to: '/discovery/local',    key: 'local',    text: 'Local Scholarships'},
      {to: '/discovery/based',    key: 'based',    text: 'Based on Previous Applications'},
    ]
  }

  state = {
    links: [],
    routes: [],
  }

  componentDidMount() {
    this.computeRoutingState(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scholarships !== this.props.scholarships) {
      this.computeRoutingState(nextProps)
    }
  }

  computeRoutingState({ links, routes, scholarships }) {
    this.setState({
      links: links.map(x => ({...x, count: scholarships[x.key].length})),
      routes: routes.map(x => ({...x, items: scholarships[x.key]}))
    })
  }

  render() {
    const { links, routes } = this.state
    return (
      <div className={css.root}>
      <div className='wrap'>
        <Match
          pattern='/discovery'
          render={props =>
            <DiscoveryNav {...props} links={links} />} />

        {routes.map(x =>
          <Match
            pattern={x.pattern}
            key={x.key}
            render={props =>
              <DiscoveryCards
                {...props}
                items={x.items}
                key={x.key} />} />)}
      </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    scholarships: state.app.scholarships,
  })
)(Discovery)
