import React, { Component } from 'react'
import img1 from './003-scholarships.jpg'
import img2 from './004-scholarships.jpg'
import mask from './mask.png'
import css from './style.css'

export class ScholarshipsOverview extends Component {
  render() {
    return (
      <div className={css.root}>
        <div className={css.mask} />
        {halves.map((x, i) =>{
        return <div key={i} className={css.half}>
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
                <button className={css.btn}>{x.button}</button>
              </div>
            </div>
              <img className={i > 0 ? css.img1 : css.img2} src={x.image} />
            </div>
          </div>

        })}
      </div>
    )
  }
}

const halves = [{
    title: `One Application. Unlimited Scholarships.`,
    image: img1,
    button: `Learn More`,
    lines: [
      {text: `fill out one scholarship application and apply to unlimited scholarships.`, lead: `High School Seniors,`},
      {text: `That means never request a recommendation, official transcript or pay to send your`},
      {text: `SAT or ACT test scores to a scholarship foundation again. That's the Pique way.`}
    ],
  },{
    title: `Find Applicants. Review Applications in One Place.`,
    image: img2,
    button: `How Does It Work?`,
    lines: [
      {text: `should not have to pay to find qualified students.`, lead: `Scholarship Foundations`},
      {text: `We bring qualified students to you for free. Review applications, rate applicants,`},
      {text: `set up interviews, select finalists, and notify winners and their counselors. All within Pique.`}
    ],
}]

export default ScholarshipsOverview
