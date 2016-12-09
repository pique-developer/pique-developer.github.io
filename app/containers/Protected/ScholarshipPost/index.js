import React, { Component } from 'react'
import { connect } from 'react-redux'
import Match from 'react-router/Match'
import ScholarshipPostGeneral from './ScholarshipPostGeneral'
import ScholarshipPostEssay from './ScholarshipPostEssay'
import ScholarshipPostIntention from './ScholarshipPostIntention'
import ScholarshipPostRequirements from './ScholarshipPostRequirements'
import { updateApplication, updateUserInfo } from 'api/actions'
import css from './style.css'

export class ScholarshipPost extends Component {
  constructor(props) {
    super(props)
    this.onChange = ::this.onChange
    this.onGroupChange = ::this.onGroupChange
    this.addField = ::this.addField
    this.removeField = ::this.removeField
    this.onPhotoUpload = ::this.onPhotoUpload
    this.onUpdate = ::this.onUpdate
  }

  static defaultProps = {
    awardAmounts: {value: ''},
    essayPrompts: {value: ''},
    essays: {prompts: [''], wordLimit: ''},
    locations: { value: {city: '', state: ''} },
    areasOfStudy: {value: ''},
    documents: {value: ''},
  }

  state = {
    id: 0,
    essays: [this.props.essays],
    awardAmounts: {
      name: 'awardAmounts',
      inputs: [{name: 'awardAmounts0', value: ''}],
    },
    title: '',
    description: '',
    photoURL: '',
    minGPA: '',
    minSATScore: '',
    minACTScore: '',
    recommendationsAmount: '',
    genericRecommendations: '',
    schoolYear: {
      freshman: false,
      sophmore: false,
      senior: false,
      junior: false,
    },
    citizenship: '',
    maxFamilyIncome: '',
    genderRequirement: {
      male: false,
      female: false
    },
    ethnicity: {
      blackAfricanAmerican: false,
      whiteCaucasian: false,
      asianPacificIslander: false,
      hispanicLatino: false,
      nativeAmerican: false,
    },
    degreeType: {
      twoYear: false,
      fourYear: false,
    },
    communityService: '',
    areasOfStudy: {
      name: 'areasOfStudy',
      inputs: [{name: 'areasOfStudy0', value: ''}],
    },
    locations: {
      name: 'locations',
      inputs: [{name: 'locations0', value: {city: '', state: ''}}],
    },
    documents: [this.props.documents]
  }

  onPhotoUpload(url) {
    this.setState({photoURL: url})
    this.props.updateUserInfo({photoURL: url})
  }

  onUpdate(data) {
    this.setState(data)
  }

  onChange(e) {
    const { name, value } = e.target
    const inputs = this.state[name].inputs
    if (inputs) {
      this.setState({[name]: {name, value, inputs: this.state[name].inputs }})
    } else {
      this.setState({[name]: value})
    }
  }

  onGroupChange(e, prefix) {
    const { name, value } = e.target
    const items = this.state[prefix].inputs
    if (prefix === 'locations') {
      const [targetName, valueName] = name.split('.')
      this.setState({
        [prefix]: {
          ...this.state[prefix],
          inputs: items.map(x =>
            x.name === targetName
              ? { ...x, value: { ...x.value, [valueName]: value }}
              : x)
        }
      })
    } else {
      this.setState({
        [prefix]: {
          ...this.state[prefix],
          inputs: items.map(x =>
            x.name === name
              ? { ...x, value}
              : x)
        }
      })
    }
  }

  addField(prefix) {
    const { id } = this.state
    const items = this.state[prefix].inputs
    const props = this.props[prefix]
    const uniqueId = id + 1
    this.setState({
      id: uniqueId,
      [prefix]: {
        ...this.state[prefix],
        inputs: items.concat([{name: `${prefix}${uniqueId}`, ...props}])
      }
    })
  }

  removeField(name, prefix) {
    const items = this.state[prefix].inputs
    const nextState = items.filter(x => x.name !== name)
    this.setState({
      [prefix]: {
        ...this.state[prefix],
        inputs: nextState
      }
    })
  }

  render() {
    const { pathname } = this.props.location
    console.log(this.state)
    return (
      <div className={css.root}>
        <div className={css.header}>Scholarship Application Post</div>
        <div className={css.breadcrumbs}>
          {routes.map(x =>
            <div
              className={pathname === x.pattern ? css.active : css.page}
              key={x.name}>{x.name}</div>
          )}
        </div>
        {routes.map(({ component:Component, pattern }) =>
          <Match
            key={pattern}
            pattern={pattern}
            render={props =>
              <Component
                {...props}
                {...this.state}
                onChange={this.onChange}
                onUpdate={this.onUpdate}
                onPhotoUpload={this.onPhotoUpload}
                onGroupChange={this.onGroupChange}
                addField={this.addField}
                removeField={this.removeField} />} />
        )}
      </div>
    )
  }
}

const routes = [
  {
    pattern: '/scholarship-post/general',
    component: ScholarshipPostGeneral,
    name: 'General Scholarship Details',
  },{
    pattern: '/scholarship-post/essay',
    component: ScholarshipPostEssay,
    name: 'Essay Requirements',
  },{
    pattern: '/scholarship-post/intention',
    component: ScholarshipPostIntention,
    name: 'Who is this scholarship intended for?',
  },{
    pattern: '/scholarship-post/requirements',
    component: ScholarshipPostRequirements,
    name: 'Supplemental Requirements',
  }
]

export default connect(
  state => ({
    ...state
  }),
  { updateApplication, updateUserInfo }
)(ScholarshipPost)
