import React from 'react'

const Ratings = ({ value }) => {
  const stars = Array.from({length: 5}, (_, i) => i + 1 <= value)
  return (
    <div style={{position: 'absolute', zIndex: 2, left: '150px', top: '70px'}}>
      {stars.map((x, i) => !!x ? <StarFill key={i} /> : <StarNoFill key={i} />)}
    </div>
  )
}

const StarFill = _ => (
  <svg width="33px" height="33px" viewBox="30 -2 33 33">
    <defs>
      <linearGradient x1="25.8237627%" y1="0%" x2="101.999998%" y2="100.999999%" id="linearGradient-1">
        <stop stopColor="#3023AE" offset="0%"></stop>
        <stop stopColor="#C96DD8" offset="100%"></stop>
      </linearGradient>
      <polygon id="path-2" points="46.5 18.75 39.1526843 22.6127124 40.5558968 14.4313562 34.6117935 8.63728757 42.8263422 7.44364379 46.5 0 50.1736578 7.44364379 58.3882065 8.63728757 52.4441032 14.4313562 53.8473157 22.6127124"></polygon>
      <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-3">
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
      </filter>
    </defs>
    <g id="Star" stroke="none" fill="none">
      <use fill="black" fillOpacity="1" filter="url(#filter-3)" href="#path-2"></use>
      <use fill="url(#linearGradient-1)" fillRule="evenodd" href="#path-2"></use>
    </g>
  </svg>
)

const StarNoFill = _ => (
  <svg width="33px" height="33px" viewBox="132 -2 33 33">
    <defs>
      <polygon id="path-6" points="148.5 18.75 141.152684 22.6127124 142.555897 14.4313562 136.611794 8.63728757 144.826342 7.44364379 148.5 0 152.173658 7.44364379 160.388206 8.63728757 154.444103 14.4313562 155.847316 22.6127124"></polygon>
      <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-7">
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
      </filter>
    </defs>
    <g id="Star">
      <use fill="black" fillOpacity="1" filter="url(#filter-7)" href="#path-6"></use>
      <use fill="#FFF1F1" fillRule="evenodd" href="#path-6"></use>
    </g>
  </svg>
)

export default Ratings