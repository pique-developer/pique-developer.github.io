import React from 'react'
import ApplicantCard from '../ApplicantCard'
import img1 from './av-1.png'
import img2 from './av-2.png'
import img3 from './av-3.png'
import img4 from './av-4.png'
import img5 from './av-5.png'
import css from './style.css'

export const NewApplicants = props => {
  return (
    <div className={css.root}>
      {items.map((x, i) =>
        <ApplicantCard key={i} {...x} />
      )}
    </div>
  )
}

const items = [{
  name: 'Brian Rucker',
  gpa: 3.7,
  rating: 4,
  image: img1,
  description: `I’m a social activist and tech enthusiast. In the fall, I will study philosophy at Haverford College.`,
  activities: ['Debate Team Captain', 'Jornalist at Benjamin Banneker HS', 'Student Government President'],
},{
  name: 'Zakiya Gibbons',
  gpa: 2.25,
  rating: 2,
  image: img2,
  description: `I am a student journalist passionate about salads and using bulldozers as a vehicle to unearth truths and educate.`,
  activities: ['Jornalist at Wilson™️ Senior High School', 'Drama Club Lead', 'Intern at the Washington Post'],
},{
  name: 'Sade Stevens',
  gpa: 4.0,
  rating: 4,
  image: img3,
  description: `I’m a student activist who has a passion for creating cross-cultural exchanges through the arts.`,
  activities: ['Dance Club President', 'Black Student League President', 'JROTC Member'],
},{
  name: `D'Angelo Rucker`,
  gpa: 4.0,
  rating: 5,
  image: img4,
  description: `Future Morehouse Man passionate about mentorship and coding.`,
  activities: ['Debate Team Captain', 'Jornalist at Benjamin Banneker HS', 'Student Government President'],
},{
  name: 'Carla Piedra',
  gpa: 1.75,
  rating: 1,
  image: img5,
  description: `Incoming freshmen at Oklahoma University studying political toodles and mcboodles.`,
  activities: ['International Club President', 'Drama Club Member', 'Class Treasurer'],
}]

export default NewApplicants
