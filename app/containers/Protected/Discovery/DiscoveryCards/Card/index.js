import React, { Component } from 'react'
import TimerIcon from 'components/Icons/Timer'
import RewardIcon from 'components/Icons/Reward'
import SaveFillIcon from 'components/Icons/SaveFill'
import SaveNoFillIcon from 'components/Icons/SaveNoFill'
import css from './style.css'

class DiscoveryCards extends Component {
  constructor(props) {
    super(props)
    this.handleClick = ::this.handleClick
  }

  state = {saved: false}

  handleClick() {
    this.setState({saved: !this.state.saved})
  }

  render() {
    const { saved } = this.state
    const { image, title, body } = this.props
    return (
      <div className={css.root}>
        <div className={css.card}>
          <div className={css.img} style={{backgroundImage: `url(${image}`}}>

            <div onClick={this.handleClick}>
              {saved
                ? <SaveFillIcon className={css.save} />
                : <SaveNoFillIcon className={css.save} />}
            </div>

          </div>
          <div className={css.body}>
            <div className={css.title}>{title}</div>
            <div className={css.copy}>{body} <span>....More.</span></div>
          </div>
          <div className={css.footer}>
            <div className={css.row}>
              <TimerIcon className={css.svg} /> <span>31</span> days to apply
            </div>
            <div className={css.row}>
              <RewardIcon className={css.svg} /> <span>$1,000</span> in total
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscoveryCards