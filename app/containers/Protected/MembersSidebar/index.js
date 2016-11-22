import React from 'react'
import SidebarDropdown from './SidebarDropdown'
import student from './student.png'
import css from './style.css'

const MembersSidebar = ({ links, user }) => {
  return (
    <div className={css.root}>
      <div className={css.backdrop} />
      <div className={css.student}>
        <div className={css.border}>
          <img className={css.img} src={user.photoURL}/>
        </div>
        <div className={css.name}>{user.displayName}</div>
      </div>

      {links.map((x, i) => <SidebarDropdown key={i} {...x} />)}

    </div>
  )
}

export default MembersSidebar