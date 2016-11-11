import React from 'react'
import Ratings from './Ratings'
import Button from 'components/Button'
import css from './style.css'

const ApplicantCard = ({ image, name, description, rating, gpa, activities }) => {
  return (
    <div className={css.root}>
      <div className={css.wrap}>
        <img className={css.img} src={image} />
        <div className={css.stripe}>
          <div className={css.name}>{name}</div>
          <div className={css.desc}>{description}</div>
          <Ratings className={css.rating} value={rating}/>
        </div>
        <div className={css.details}>
          <div className={css.info}>
            <div className={css.title}>GPA</div>
            <div className={css.val}>{gpa}</div>
          </div>
          <div className={css.info}>
            <div className={css.title}>Activities</div>
            <div className={css.val}>
              {activities.map((x, i) =>
                <div key={i} className={css.activity}>{x}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicantCard