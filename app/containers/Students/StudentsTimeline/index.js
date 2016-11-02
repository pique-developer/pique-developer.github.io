import React, { Component } from 'react'
import { connect } from 'react-redux'
import img1 from './502-student.png'
import img2 from './503-connections.png'
import img3 from './504-screenshot.png'
import TimelineDots from './TimelineDots'
import css from './style.css'

export const StudentsTimeline = ({ position })=> {
  const animate = position !== 'top'
  return (
    <div className={css.root}>
      <div className={css.header}>The Pique Way</div>
      <div className={css.content}>
        <div className={css.columns}>
          <div className={`${css.left} ${animate ? css.in : ''}`}>
            <div className={css.title}>Request and  Save All Your Documents in One Place</div>
            <div className={css.copy}>Through Pique you can send a request to your teachers and counselors to upload your recommendations and official transcript. When each document is uploaded, it is saved onto your Pique account and can then be reused to apply to any scholarship on Pique.</div>
            <img src={img3} />
          </div>
          <div className={`${css.right} ${animate ? css.in : ''}`}>
            <img src={img2} />
            <div className={css.text}>
              <div className={css.title}>Find Scholarships You Can Actually Win</div>
              <div className={css.copy}>All platforms give you access to a curated list of scholarships. Scholarships hosted on Pique are categorized into 4 categories; <span>‘local scholarships’</span>, ‘national scholarships’, ‘niche national scholarships’, and ‘based on previous scholarships you’ve applied to’.</div>
            </div>
          </div>
        </div>
        <div className={css.timeline}>
          <img src={img1} className={css[position]} />
          <TimelineDots value={6} />
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    position: state.ui.position,
  })
)(StudentsTimeline)
