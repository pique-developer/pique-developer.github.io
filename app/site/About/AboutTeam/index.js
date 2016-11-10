import React from 'react'
import img1 from './102-brian-min.png'
import img2 from './103-ev-min.png'
import img3 from './104-adam-min.png'
import img4 from './105-nnamdi-min.png'
import img5 from './106-kevin-min.png'
import img6 from './107-kyle-min.png'
import css from './style.css'

export const AboutTeam = props => {
  return (
    <div className={css.root} id="team">
      <div className={css.header}>Our Team</div>
      <ul className={css.ul}>
        {team.map((x, i) =>
          <li key={i} className={css.item} style={x.style}>
            <img className={css.img} src={x.image} />
            <div className={css.overlay}>
              <div className={css.copy}>
                <div className={css.name}>{x.name}</div>
                <div className={css.position}>{x.position}</div>
                <div className={css.education}>{x.education}</div>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

const team = [
  {name: 'Brian Rucker', position: 'Founder', education: 'Haverford College', image: img1, style: {backgroundColor: `#31D26C`}},
  {name: 'Evan Turner', position: 'Software Engineer', education: 'Hunter College', image: img2, style: {backgroundColor: `#51BBF1`}},
  {name: 'Adam Middleton', position: 'Scholarship Pipeline Developer', education: 'George Washington University', image: img3, style: {backgroundColor: `#E1D113`}},
  {name: 'Nnamdi Nwaezeapu', position: 'Scholarship Pipeline Developer', education: 'Columbia University', image: img4, style: {backgroundColor: `#2BDBB4`}},
  {name: 'Kevin Iraheta', position: 'Scholarship Pipeline Developer', education: 'Lafayette College', image: img5, style: {backgroundColor: `#E1D113`}},
  {name: 'Kyle Schiller', position: 'Data Engineer', education: 'Carleton College', image: img6, style: {backgroundColor: `#DB2BD4`}},
]

export default AboutTeam
