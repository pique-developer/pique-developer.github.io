import React from 'react'
import student from './student.png'
import caret from './caret.png'
import css from './style.css'

const MembersSidebar = props => {
  return (
    <div className={css.root}>
      <div className={css.student}>
        <img className={css.img} src={student}/>
        <div className={css.name} />
      </div>

      <div className={css.dropdown}>
        <div className={css.applications} />
        <img className={css.caret} src={caret} />
      </div>

      <div className={css.menu}>
        <div className={css.new} />
        <div className={css.reviewed} />
      </div>

      <div className={css.dropdown}>
        <div className={css.finalists} />
        <img className={css.caret} src={caret} />
      </div>

      <div className={css.menu}>
        <div className={css.unanimous} />
        <div className={css.determined} />
      </div>

      <div className={css.dropdown}>
        <div className={css.interviewees} />
        <img className={css.caret} src={caret} />
      </div>

      <div className={css.dropdown}>
        <div className={css.rate} />
        <img className={css.caret} src={caret} />
      </div>

    </div>
  )
}


export default MembersSidebar