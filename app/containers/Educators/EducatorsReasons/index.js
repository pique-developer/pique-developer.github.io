import React from 'react'
import img1 from './302-clock.png'
import img2 from './404-check.png'
import css from './style.css'

export const EducatorsReasons = props => {
  return (
    <div className={css.root}>
      <div className={css.header}>Why Educators Cannot Wait to Use Pique</div>
      <div className={css.under}>
        <img src={img1} />
        <div className={css.title}>Save Time Writing Recommendations</div>
        <div className={css.body}>Our thoughts are simple; help save educators time in the scholarship application process and they will in turn have more time to prepare tomorrow’s lesson plan, review last night’s homework assignments and strategize ways to enhance the classroom environment.</div>
      </div>
      <div className={css.over}>
        <img src={img2} />
        <div className={css.title}>Students Are Never Penalized. That's a Pique Promise.</div>
        <div className={css.body}>Write a standard recommendation for your students with the peace of mind of knowing they will not be penalized for having a 'generic recommendation'. We educate scholarship foundations on limited time you have as an educator. Foundations that host their scholarships on Pique therefore agree to accept generic recommendations, no penalites.</div>
      </div>
    </div>
  )
}

export default EducatorsReasons
