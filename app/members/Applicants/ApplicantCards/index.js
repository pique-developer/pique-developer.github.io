import React from 'react'
import Ratings from './Ratings'
import css from './style.css'

const ApplicantCards = ({ items }) => {
  return (
    <div className={css.root}>
      {items.map((x, i) =>
        <div key={i} className={css.item}>
          <div className={css.wrap}>
            <img className={css.img} src={x.image} />
            <div className={css.stripe}>
              <div className={css.name}>{x.name}</div>
              <div className={css.desc}>{x.description}</div>
              <Ratings className={css.rating} value={x.rating}/>
            </div>
            <div className={css.details}>
              <div className={css.info}>
                <div className={css.title}>GPA</div>
                <div className={css.val}>{x.gpa}</div>
              </div>
              <div className={css.info}>
                <div className={css.title}>Activities</div>
                <div className={css.val}>
                  {x.activities.map((x, i) =>
                    <div key={i} className={css.activity}>{x}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ApplicantCards