import React from 'react'
import Stars from 'components/Stars'
import Button from 'components/Button'
import av1 from './av-1.png'
import av2 from './av-2.png'
import css from './style.css'

const Profiles = props => {
  return (
    <div className={css.root}>
      <div className={css.profile}>
        <img className={css.img} src={av1} />
        <div className={css.stripe}>
          <div className={css.name1} />
          <div className={css.desc1}/>
          <Stars nofill={true}/>
        </div>
        <div className={css.details}>
          <div className={css.gpa}>
            <div className={css.title}>GPA</div>
            <div className={css.val}>3.7</div>
          </div>
          <div className={css.activities}>
            <div className={css.title}>Activities</div>
            <div className={css.val}>
              {activities.a.map((x, i) =>
                <div key={i} className={css.activity}>{x}</div>
              )}
            </div>
          </div>
          <div className={css.view}>
            <Button className={css.btn}>View Full Profile</Button>
          </div>
        </div>
      </div>

      <div className={css.profile}>
        <img className={css.img} src={av2} />
        <div className={css.stripe}>
          <div className={css.name2} />
          <div className={css.desc2}/>
          <Stars />
        </div>
        <div className={css.details}>
          <div className={css.gpa}>
            <div className={css.title}>GPA</div>
            <div className={css.val}>3.7</div>
          </div>
          <div className={css.activities}>
            <div className={css.title}>Activities</div>
            <div className={css.val}>
              {activities.b.map((x, i) =>
                <div key={i} className={css.activity}>{x}</div>
              )}
            </div>
          </div>
          <div className={css.view}>
            <Button className={css.btn}>View Full Profile</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const activities = {
  a: ['Debate Team Captain', 'Jornalist at Benjamin Banneker HS', 'Student Government President'],
  b: ['Jornalist at Wilson Senior High School', 'Drama Club Lead', 'Intern at the Washington Post']
}

export default Profiles