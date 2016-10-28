import React, { Component } from 'react'
import ProvidersHeader from './ProvidersHeader'
import ProvidersCarousel from './ProvidersCarousel'
import ProvidersGrid from './ProvidersGrid'
import ProvidersPricing from './ProvidersPricing'
import css from './style.css'

export class ScholarshipProviders extends Component {
  render() {
    return (
      <div>
        <ProvidersHeader />
        <ProvidersCarousel />
        <ProvidersGrid />
        <ProvidersPricing />
      </div>
    )
  }
}

export default ScholarshipProviders
