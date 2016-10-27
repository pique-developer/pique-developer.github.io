import React, { Component } from 'react'
import { connect } from 'react-redux'
import mobile from './306-slide.png'
import tablet from './307-slide.png'
import desktop from './308-slide.png'
import css from './style.css'

export class ProvidersCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      leaving: 1,
    }
    this.rotateSlides = ::this.rotateSlides
    this.startCarouselInterval = ::this.startCarouselInterval
    this.clearCarouselInterval = ::this.clearCarouselInterval
  }

  componentDidMount() {
    this.startCarouselInterval()
  }

  componentWillUnmount() {
    this.clearCarouselInterval()
  }

  startCarouselInterval() {
    this.interval = setInterval(this.rotateSlides, 2500)
  }

  clearCarouselInterval() {
    clearInterval(this.interval)
  }

  rotateSlides() {
    const { images } = this.props
    const { active, leaving } = this.state
    const lastIndex = images.length - 1
    this.setState({
      active: active ===  lastIndex ? 0 : active + 1,
      leaving: leaving === lastIndex ? 0 : leaving + 1,
    })
  }

  render() {
    const { active, leaving } = this.state
    const { images } = this.props

    return (
      <div className={css.root}>
        <div className={css.title}>The Scholarship Application Process Just Got Easier.</div>

        <div className={css.content}>
          <div className={css.carousel}>

            <div className={css.slides}>
              {images.map((x, i) =>
                <div
                  key={i}
                  onClick={this.clearCarouselInterval}
                  className={i === leaving ? css.active : i === active ? css.leaving : css.waiting}>
                  <div className={css.img} style={{backgroundImage: `url(${x})`}} />
                </div>
              )}
            </div>
          </div>

          <div className={css.details}>
            {bulletpoints.map((x, i) =>
              <div key={i} className={css.bulletpoint}>
                <div className={css.bullet}>
                  <div className={css.num}>{i + 1}</div>
                </div>

                <div className={css.point}>
                  <div className={i === active ? css.highlight : css.h3}>{x.title}</div>
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

const bulletpoints = [
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

export default connect(
  state => ({
    images: [mobile, tablet, desktop]
  })
)(ProvidersCarousel)
