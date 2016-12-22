import React from 'react'
import { connect } from 'react-redux'
import essays from './essays.png'
import recommendations from './recommendations.png'
import documents from './documents.png'
import add from './add.png'
import css from './style.css'

export const ApplicantDocuments = ({ description, children }) => {
  return (
    <div className={css.root}>
      <div className={css.header}>Application Documents</div>
      <div className={css.box}>

        <div className={css.section}>
          <div className={css.title}>
            <img className={css.icon} src={essays} />
            <span className={css.text}>Essays</span>
          </div>
          <img className={css.add} src={add} />
        </div>

        <div className={css.section}>
          <div className={css.title}>
            <img className={css.icon} src={recommendations} />
            <span className={css.text}>Recommendations</span>
          </div>
          <div className={css.placeholder}>Request a Recommendation</div>
        </div>

        <div className={css.section}>
          <div className={css.title}>
            <img className={css.icon} src={documents} />
            <span className={css.text}>Supplemental Documents</span>
          </div>
          {children}
          <img className={css.add} src={add} />
        </div>

      </div>

    </div>
  )
}

export default connect(
  state => ({
    user: state.auth.user
  })
)(ApplicantDocuments)
