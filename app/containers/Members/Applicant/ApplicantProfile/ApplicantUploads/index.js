import React from 'react'
import Apple from 'components/Icons/Apple'
import Book from 'components/Icons/Book'
import css from './style.css'

export const ApplicantUploads = props => {
  return (
    <div className={css.root}>
      <div className={css.section}>
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
      <div className={css.section}>
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

const transcripts = [
  {
    image: 'http://cdn2.themeasuredmom.com/wp-content/uploads/2013/08/tiny-topic-mini-lesson-2-the-measured-mom-590x303.gif',
    caption: 'Offical Transcript',
  }
]

const testScores = [
  {
    image: 'http://www.bigdandme.com/blog/wp-content/uploads/2013/12/Caroline-Christmas-List-001.jpg',
    caption: '90th Percentile',
  }
]

const recommendations = [
  {
    image: 'http://justsomething.co/wp-content/uploads/2014/11/23-hilarious-homework-answers-3.jpg',
    caption: 'Homework',
  },{
    image: 'https://storage.googleapis.com/imgfave/image_cache/1350068835835440.jpg',
    caption: 'Recommendation',
  }

]

const essays = [
  {
    image: 'http://justsomething.co/wp-content/uploads/2014/11/23-hilarious-homework-answers-3.jpg',
    caption: 'Homework',
  }
]

export default ApplicantUploads
