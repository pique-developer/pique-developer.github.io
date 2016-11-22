import React from 'react'
import Apple from 'components/Icons/Apple'
import Book from 'components/Icons/Book'
import css from './style.css'

export const ApplicantUploads = props => {
  return (
    <div className={css.root}>
      <div className={css.half}>
        <div className={css.title}>
          <Apple className={css.icon} />
          Transcripts
        </div>
        <div className={css.grids}>
          {transcripts.map((x, i) =>
            <UploadPreview key={i} image={x.image} caption={x.caption} />
          )}
        </div>
      </div>
      <div className={css.half}>
        <div className={css.title}>
          <Book className={css.icon} />
          Test Scores
        </div>
        <div className={css.grids}>
          {testScores.map((x, i) =>
            <UploadPreview key={i} image={x.image} caption={x.caption} />
          )}
        </div>
      </div>
      <div className={css.section}>
        <div className={css.title}>
          <Apple className={css.icon} />
          Recommendations
        </div>
        <div className={css.grids}>
          {recommendations.map((x, i) =>
            <UploadPreview key={i} image={x.image} caption={x.caption} />
          )}
        </div>
      </div>
      <div className={css.section}>
        <div className={css.title}>
          <Book className={css.icon} />
          Essays
        </div>
        <div className={css.grids}>
          {essays.map((x, i) =>
            <UploadPreview key={i} image={x.image} caption={x.caption} />
          )}
        </div>
      </div>
    </div>
  )
}

const UploadPreview = ({ image, caption }) => {
  return (
    <div className={css.grid}>
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

export default ApplicantUploads
