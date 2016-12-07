import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import ScholarshipPostGeneral from './ScholarshipPostGeneral'
import ScholarshipPostEssay from './ScholarshipPostEssay'
import ScholarshipPostIntention from './ScholarshipPostIntention'
import ScholarshipPostRequirements from './ScholarshipPostRequirements'
import { updateApplication } from 'api/actions'
import css from './style.css'

export class ScholarshipPost extends Component {
  constructor(props) {
    super(props)
    this.onChange = ::this.onChange
    this.onGroupChange = ::this.onGroupChange
    this.addField = ::this.addField
    this.removeField = ::this.removeField
  }

  static defaultProps = {
    awardAmounts: {value: '$'},
    essayPrompts: {value: ''},
    essays: {prompts: [''], wordLimit: ''},
    locations: { value: {city: '', state: ''} },
    areasOfStudy: {value: ''},
    documents: {value: ''},
  }

  state = {
    id: 0,
    title: '',
    description: '',
    awardAmounts: {
      name: 'awardAmounts',
      value: '$',
      children: [],
    },
    minGPA: 0,
    minSATScore: 0,
    minACTScore: 0,
    recommendations: false,
    genericRecommendations: 0,
    count: 0,
    essays: [this.props.essays],
    schoolYear: [],
    citizenship: [],
    maxFamilyIncome: '',
    gender: [],
    race: [],
    degreeType: [],
    areasOfStudy: {
      name: 'areasOfStudy',
      children: [{name: 'areasOfStudy0', value: ''}],
    },
    communityService: '',
    locations: {
      name: 'locations',
      children: [{name: 'locations0', value: {city: '', state: ''}}],
    },
    documents: [this.props.documents]
  }

  onChange(e) {
    const { name, value } = e.target
    const children = this.state[name].children
    if (children) {
      this.setState({[name]: {name, value, children: this.state[name].children }})
    } else {
      this.setState({[name]: value})
    }
  }

  onGroupChange(e, prefix) {
    const { name, value } = e.target
    const items = this.state[prefix].children
    if (prefix === 'locations') {
      const [targetName, valueName] = name.split('.')
      this.setState({
        [prefix]: {
          ...this.state[prefix],
          children: items.map(x =>
            x.name === targetName
              ? { ...x, value: { ...x.value, [valueName]: value }}
              : x)
        }
      })
    } else {
      this.setState({
        [prefix]: {
          ...this.state[prefix],
          children: items.map(x =>
            x.name === name
              ? { ...x, value}
              : x)
        }
      })
    }

  }

  addField(prefix) {
    const { id } = this.state
    const items = this.state[prefix].children
    const props = this.props[prefix]
    const uniqueId = id + 1
    this.setState({
      id: uniqueId,
      [prefix]: {
        ...this.state[prefix],
        children: items.concat([{name: `${prefix}${uniqueId}`, ...props}])
      }
    })
  }

  removeField(name, prefix) {
    const items = this.state[prefix].children
    const nextState = items.filter(x => x.name !== name)
    this.setState({
      [prefix]: {
        ...this.state[prefix],
        children: nextState
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className={css.root}>
        <div className={css.header}>Scholarship Application Post</div>
        {routes.map(({ component:Component, pattern }) =>
          <Match
            key={pattern}
            pattern={pattern}
            render={props =>
              <Component
                {...props}
                {...this.state}
                onChange={this.onChange}
                onGroupChange={this.onGroupChange}
                addField={this.addField}
                removeField={this.removeField} />} />
        )}
      </div>
    )
  }
}

const routes = [
  {pattern: '/scholarship-post/general', component: ScholarshipPostGeneral},
  {pattern: '/scholarship-post/essay', component: ScholarshipPostEssay},
  {pattern: '/scholarship-post/intention', component: ScholarshipPostIntention},
  {pattern: '/scholarship-post/requirements', component: ScholarshipPostRequirements},
]

export default connect(
  state => ({
    ...state
  }),
  { updateApplication }
)(ScholarshipPost)
