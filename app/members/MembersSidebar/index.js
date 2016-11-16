import React from 'react'
import Link from 'react-router/Link'
import student from './student.png'
import caret from './caret.png'
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

const SidebarDropdown = ({ routes, title }) => {
  return (
    <div>
      <div className={css.dropdown}>
        <div className={css.title}>{title}</div>
        <img className={css.caret} src={caret} />
      </div>
      <div className={css.links}>
        {routes.map((x, i) =>
          <Link
            key={i}
            className={css.link}
            to={x.route}
            activeClassName={css.active}
            activeOnlyWhenExact={x.activeOnlyWhenExact}>
            <div className={css.caption}>{x.alias || x.caption}</div>
          </Link>
        )}
      </div>
    </div>
  )
}


export default MembersSidebar