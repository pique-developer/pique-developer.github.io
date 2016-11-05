import React from 'react'
import NonprofitsHeader from './NonprofitsHeader'
import NonprofitsCarousel from './NonprofitsCarousel'
import NonprofitsPartners from './NonprofitsPartners'
// import NonprofitsReasons from './NonprofitsReasons'
// import css from './style.css'

export const Nonprofits = props => {
  return (
    <div>
      <NonprofitsHeader />
      <NonprofitsCarousel />
      <NonprofitsPartners />
    </div>
  )
}

export default Nonprofits
