import React from 'react'
import SidebarDropdown from './SidebarDropdown'
import student from './student.png'
import css from './style.css'

const MembersSidebar = ({ routes }) => {
  return (
    <div className={css.root}>
      <div className={css.student}>
        <div className={css.border}>
          <img className={css.img} src={student}/>
        </div>
        <div className={css.name}>Charles Barkley</div>
      </div>

      <SidebarDropdown {...routes.applicants} />
      <SidebarDropdown {...routes.committee} />
    </div>
  )
}

export default MembersSidebar