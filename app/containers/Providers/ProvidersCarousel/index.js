import React, { Component } from 'react'
import { connect } from 'react-redux'
import Carousel from 'nuka-carousel'
import img1 from './310-slide.png'
import img2 from './311-slide.png'
import img3 from './312-slide.png'
import css from './style.css'

export class ProvidersCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {index: 0, autoplay: true}
    this.goToSlide = ::this.goToSlide
    this.pauseCarousel = ::this.pauseCarousel
  }

  pauseCarousel(index) {
    this.setState({ index, autoplay: false })
  }

  goToSlide(index) {
    this.setState({ index })
  }

  render() {
    const { index, autoplay } = this.state
    return (
      <div className={css.root}>
        <div className={css.title}>The Scholarship Application Process Just Got Easier.</div>
        <div className={css.content}>
          <div className={css.slides}>
            <Carousel
              wrapAround
              autoplay={autoplay}
              initialSlideHeight={500}
              initialSlideWidth={680}
              afterSlide={this.goToSlide}
              slideIndex={index}>
              <div className={css.bg} style={{backgroundImage: `url(${img1})`}} />
              <div className={css.bg} style={{backgroundImage: `url(${img2})`}} />
              <div className={css.bg} style={{backgroundImage: `url(${img3})`}} />
            </Carousel>
          </div>
          <div className={css.details}>
            {details.map((x, i) =>
              <div
                key={i}
                className={index === i ? css.highlight : css.bulletpoint}
                onClick={_ => this.pauseCarousel(i)}>
                <div className={css.bullet}>
                  <div className={css.num}>{i + 1}</div>
                </div>
                <div className={css.point}>
                  <div className={css.h3}>{x.title}</div>
                  <div className={css.h5}>{x.body}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const details = [
  {
    title: `Create an Account and Post Your Scholarship`,
    body: `First, fill out our common application and add supplemental requirements specific to your scholarship.`
  },{
    title: `Create a Team. Review Applications In-App`,
    body: `Next, invite your board to assist in reviewing applications. You can leave comments on applications and rate them on a scale from 1 - 5 stars.`,
  },{
    title: `Select and Notify Winners In-App`,
    body: `Lastly, notify students if they will receive an interview, are finalists or even winners of your scholarship.`,
  }
]

export default ProvidersCarousel
