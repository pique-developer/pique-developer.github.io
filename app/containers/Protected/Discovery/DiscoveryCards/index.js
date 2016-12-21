import React from 'react'
import img from './01-discovery.png'
import TimerIcon from 'components/Timer'
import RewardIcon from 'components/Reward'
import css from './style.css'

const DiscoveryCards = ({ items }) => {
  return (
    <div className={css.root}>
      <div className={css.items}>
        {items.map((x, i) =>
          <div key={i}  className={css.item}>
            <div className={css.card}>
              <div className={css.img} style={{backgroundImage: `url(${x.image}`}} />
              <div className={css.body}>
                <div className={css.title}>{x.title}</div>
                <div className={css.copy}>{x.body} <span>....More.</span></div>
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
        )}
      </div>
    </div>
  )
}

export default DiscoveryCards