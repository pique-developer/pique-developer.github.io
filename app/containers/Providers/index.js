import React from 'react'
import ProvidersHeader from './ProvidersHeader'
import ProvidersCarousel from './ProvidersCarousel'
import ProvidersGrid from './ProvidersGrid'
import ProvidersPricing from './ProvidersPricing'
import css from './style.css'

export const Providers = props => {
  return (
    <div>
      <ProvidersHeader />
      <ProvidersCarousel />
      <ProvidersGrid />
      <ProvidersPricing />
    </div>
  )
}

export default Providers
