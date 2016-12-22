import React from 'react'
import css from './style.css'

const UploadPreview = ({ image, caption }) => {
  return (
    <div className={css.root}>
      <div className={css.preview} style={{backgroundImage: `url(${image})`}}/>
      <div className={css.caption}>{caption}</div>
    </div>
  )
}

const image = 'https://get-pique.github.io/images/doc.jpg'

const transcripts = [
  {
    image,
    caption: 'Offical Transcript',
  }
]

const testScores = [
  {
    image,
    caption: '90th Percentile',
  }
]

const recommendations = [
  {
    image,
    caption: 'Homework',
  },{
    image,
    caption: 'Recommendation',
  }

]

const essays = [
  {
    image,
    caption: 'Homework',
  }
]

export default UploadPreview