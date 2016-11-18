import React from 'react'
import SidebarDropdown from './SidebarDropdown'
import student from './student.png'
import css from './style.css'

const MembersSidebar = props => {
  return (
    <div className={css.root}>
      <div className={css.backdrop} />
      <div className={css.student}>
        <div className={css.border}>
          <img className={css.img} src={student}/>
        </div>
        <div className={css.name}>Charles Barkley</div>
      </div>

      {links.map((x, i) => <SidebarDropdown key={i} {...x} />)}

    </div>
  )
}

const links = [{
    title: 'Applications',
    links: [
      {to: '/dashboard/new',          text: 'New'},
      {to: '/dashboard/reviewed',     text: 'Reviewed'},
      {to: '/dashboard/interviewees', text: 'Interviewees'},
      {to: '/dashboard/finalists',    text: 'Finalists'},
    ],
  },{
    title: 'Selection Committee',
    links: [
      {to: '/committee', text: 'Committee Page'},
      {to: '/invite',    text: 'Invite Members'},
    ],
}]

export default MembersSidebar