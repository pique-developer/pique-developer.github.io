import React from 'react'
import Button from 'components/Button'
import b1 from './b1.png'
import b2 from './b2.png'
import b3 from './b3.png'
import b4 from './b4.png'
import css from './style.css'

const Banner = props => {
  return (
    <div className={css.root}>
      <div className={css.header} />
      <div className={css.divider} />
      <ul className={css.ul}>
      {team.map((x, i) =>
        <li key={i} className={css.li}>
          <img className={css.img} src={x.img} />
          <div className={css.details}>
            <div className={css.name}>{x.name}</div>
            <div className={css.info}>{x.position}</div>
            <div className={css.info}>{x.company}</div>
          </div>
        </li>
      )}
      </ul>
      <div className={css.invite}>
        <Button className={css.btn}>Invite More Reviewers</Button>
      </div>
    </div>
  )
}

const team = [
  {
    name: 'Carla Piedra',
    position: 'College Access Director',
    company: 'College Up',
    img: b1,
  },{
    name: 'Nnamdi Nwaezeapu',
    position: 'Parallegal ',
    company: 'The Smith Group',
    img: b2,
  },{
    name: 'Kevin Iraheta',
    position: 'Pipeline Developer',
    company: 'Civic Accelerator',
    img: b3,
  },{
    name: 'Laura Middleton',
    position: 'Academic Counselor',
    company: 'College Prep',
    img: b4,
  },
]

export default Banner