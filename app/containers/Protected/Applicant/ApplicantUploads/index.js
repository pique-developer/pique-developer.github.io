import React from 'react'
import Apple from 'components/Icons/Apple'
import Book from 'components/Icons/Book'
import ApplicantAbout from './About'
import ApplicantDocuments from './Documents'
import css from './style.css'

export const ApplicantUploads = props => {
  return (
    <div className={css.root}>
      <ApplicantAbout {...props} />
      <ApplicantDocuments
        {...props}
        essays={essays}
        recommendations={recommendations}
        documents={transcripts} />
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
