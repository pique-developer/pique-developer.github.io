import React, { Component } from 'react'
import ProvidersHeader from './ProvidersHeader'
import ProvidersCarousel from './ProvidersCarousel'
import css from './style.css'

export class ScholarshipProviders extends Component {
  render() {
    return (
      <div>
        <ProvidersHeader />
        <ProvidersCarousel />
      </div>
    )
  }
}

export default ScholarshipProviders
