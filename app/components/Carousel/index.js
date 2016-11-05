import React, { Component } from 'react'
import NukaCarousel from 'nuka-carousel'
import css from './style.css'

export class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {index: 0, autoplay: true}
    this.goToSlide = ::this.goToSlide
    this.skipToSlide = ::this.skipToSlide
  }

  skipToSlide(params) {
    const { next, previous } = params
    const { index } = this.state
    if (index < params.index) {
      params.index - index > 1 ? previous() : next()
    } else if (index > params.index) {
      index - params.index > 1 ? next() : previous()
    }
    this.setState({autoplay: false})
  }

  goToSlide(index) {
    this.setState({ index })
  }

  render() {
    const { index, autoplay } = this.state
    const { className, slides, header } = this.props
    return (
      <div className={css.root} className={className}>
        <div className={css.title}>{header}</div>
        <div className={css.content}>
          <NukaCarousel
            wrapAround
            autoplay={autoplay}
            slideIndex={index}
            initialSlideHeight={500}
            initialSlideWidth={680}
            afterSlide={this.goToSlide}
            slidesToScroll={1}
            decorators={[{
              position: 'TopRight',
              component: props =>
                <CarouselDetails
                  {...props}
                  slides={slides}
                  index={index}
                  onClick={this.skipToSlide} />
            }]}>
            {slides.map((x, i) =>
              <div
                key={i}
                className={css.bg}
                style={{backgroundImage: `url(${x.image})`}} />
            )}
          </NukaCarousel>
        </div>
      </div>
    )
  }
}

const CarouselDetails = ({ slides, index, onClick, ...rest }) => {
  return (
    <div className={css.details}>
      {slides.map((x, i) =>
        <div
          key={i}
          className={index === i ? `${css.detail} ${css.active}` : css.detail}
          onClick={_ => onClick({
            previous: rest.previousSlide,
            next: rest.nextSlide,
            index: i
          })}>
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
  )
}

export default Carousel
