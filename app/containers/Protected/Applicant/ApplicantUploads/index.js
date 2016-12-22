import React from 'react'
import Apple from 'components/Icons/Apple'
import Book from 'components/Icons/Book'
import ApplicantAbout from './About'
import ApplicantDocuments from './Documents'
import ApplicantPreview from './Preview'
import css from './style.css'

export const ApplicantUploads = props => {
  return (
    <div className={css.root}>

      <ApplicantAbout {...props} />
      <ApplicantDocuments {...props}>

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
      </ApplicantDocuments>
    </div>
  )
}

export default ApplicantUploads
