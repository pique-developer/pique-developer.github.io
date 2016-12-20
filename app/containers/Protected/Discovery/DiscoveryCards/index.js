import React from 'react'
import img from './01-discovery.png'
import css from './style.css'

const DiscoveryCards = ({ items }) => {
  return (
    <div className={css.root}>
      <div className={css.items}>
        {items.map((x, i) =>
          <div key={i}  className={css.item}>
            <div className={css.card}>
              <div className={css.img} style={{backgroundImage: `url(${img}`}} />
              <div className={css.body}>
                <div className={css.title}>Ayn Rand Essay Contest</div>
                <div className={css.copy}>Have you read one of Ayn Rand’s thought-provoking novels? Now’s the time! Enter an Ayn Rand Institute essay contest for your chance to win thousands of dollars in cash prizes <span>....More.</span></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DiscoveryCards