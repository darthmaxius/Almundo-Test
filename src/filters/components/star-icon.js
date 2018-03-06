import React from 'react'
import './star-icon.css'

const StarIcon = (props) => {
  let stars = []
  for (let i = 0; i < props.stars; i++) {
    stars.push(<i className='icon-star' key={i}></i>)
  }

  return (
    <span className="StarIcon">{stars.map((item) => item)}</span>
  )
}

export default StarIcon
