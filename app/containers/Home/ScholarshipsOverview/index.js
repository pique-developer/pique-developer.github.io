import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/Link'
import img1 from './003-scholarships.jpg'
import img2 from './004-scholarships.jpg'
import mask from './mask.png'
import css from './style.css'

export class ScholarshipsOverview extends Component {

  render() {
    const { animate1, animate2 } = this.props.ui
    return (
      <div className={css.root}>
        <div className={css.mask} />
        {halves.map((x, i) =>
          <div key={i} className={css.half}>
            <div className={i === 0 ? css.fst : css.scd}>
              <div className={i === 0 ? css.left : css.right}>
                <div className={css.title}>{x.title}</div>
                <div className={css.lines}>
                  {x.lines.map((y, j) =>
                    <div key={j} className={i === 0 ? css.line1 : css.line2}>
                      {y.lead ? <span className={css.lead}>{y.lead} </span> : ''}{y.text}
                    </div>
                  )}
                </div>
                <div className={i === 0 ? css.btns1 : css.btns2}>
                  <button className={css.btn} onClick={this.props.onClick}>Sign Up!</button>

                    <Link
                      className={css.btn}
                      to={i > 0 ? '/providers' : '/students'}>
                      {x.button}
                    </Link>

                </div>
              </div>
              <img className={
                i > 0
                  ? animate1 ? `${css.img1} ${css.fade1}` : css.img1
                  : animate2 ? `${css.img2} ${css.fade2}` : css.img2
              } src={x.image} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

const halves = [{
    title: `One Application. Unlimited Scholarships.`,
    image: img1,
    button: `Learn More`,
    lines: [
      {text: `fill one scholarship application and apply to unlimited scholarships.`, lead: `High School Seniors,`},
      {text: `That means never request more than one recommendation or official transcript again.`},
      {text: `That's the Pique way.`}
    ],
  },{
    title: `Find Applicants. Review Applications in One Place.`,
    image: img2,
    button: `How Does It Work?`,
    lines: [
      {text: `should never have to pay a premium to find applicants.`, lead: `Scholarship Foundations`},
      {text: `We bring qualified students to you for just $99.99/year.`},
      {text: `Review applications, rate applicants, select interviewees, finalists and notify winners all in-app.`}
    ],
}]

export default connect(
  state => ({
    ui: state.ui
  })
)(ScholarshipsOverview)
