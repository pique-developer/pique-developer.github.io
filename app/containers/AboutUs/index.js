import React from 'react'
import AboutUsHero from './AboutUsHero'
import MissionStatement from './MissionStatement'
import Team from './Team'
import OurInvestors from './OurInvestors'
import css from './style.css'

export const AboutUs = props => {
  return (
    <div>
      <AboutUsHero />
      <MissionStatement />
      <Team />
      <OurInvestors />
    </div>
  )
}

export default AboutUs
