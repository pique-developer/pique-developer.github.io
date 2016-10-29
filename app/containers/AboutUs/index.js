import React from 'react'
import AboutUsHero from './AboutUsHero'
import MissionStatement from './MissionStatement'
import Team from './Team'
import css from './style.css'

export const AboutUs = props => {
  return (
    <div>
      <AboutUsHero />
      <MissionStatement />
      <Team />
    </div>
  )
}

export default AboutUs
