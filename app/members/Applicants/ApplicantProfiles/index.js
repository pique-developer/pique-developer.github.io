import React from 'react'
import { connect } from 'react-redux'
import ApplicantCard from '../ApplicantCard'
import css from './style.css'

export const ApplicantProfiles = ({ items }) => {
  return (
    <div className={css.root}>
      {items.map((x, i) =>
        <ApplicantCard key={i} {...x} />
      )}
    </div>
  )
}

export default ApplicantProfiles