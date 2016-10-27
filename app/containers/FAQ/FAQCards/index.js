import React from 'react'
import icon from './question.png'
import css from './style.css'

export const FAQCards = props => {
  return (
    <div className={css.root}>
      {cards.map((x, i) =>
        <div key={i} className={css.card}>
          <div className={css.left}>
            <img src={icon} />
          </div>
          <div className={css.copy}>
            <div className={css.question}>{x.title}</div>
            <div className={css.answer}>{x.body}</div>
          </div>
        </div>
      )}
    </div>
  )
}

const cards = [
  {
    title: `When will Pique be live?`,
    body: `Pique will be going live in January 2017! If you’re interested in receiving updates and following our progress over these next three months, sign up for updates :)`,
  },{
    title: `Why is it free? That's awesome.`,
    body: `Lorem ipsum. Pique is awesome. We’re building a really great platforn. Pique is comprehensive. And that is why the sun lies where the moon has fallen whenever over the rainbow lorem cough.`,
  },{
    title: `When will Pique be live?`,
    body: `Pique will be going live in January 2017! If you’re interested in receiving updates and following our progress over these next three months, sign up for updates :)`,
  },{
    title: `Have More Questions?`,
    body: <span>Feel free to email us at <a className={css.mail} href="mailto:rucker.b@gmail.com">rucker.b@gmail.com</a> and we will get back to you as soon as possible!</span>,
  }
]

export default FAQCards