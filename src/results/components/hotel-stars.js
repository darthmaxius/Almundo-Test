import React from 'react'

const RepeatStars = (props) => {
  let items = []
  for (let i = 0; i < parseInt(props.stars); i++) {
    items.push(<i key={i} className='fa fa-star' aria-hidden='true'></i>)
  }

  return items
}

const HotelStars = (props) => {
  return (
    <p>
      <RepeatStars stars={props.stars} />
    </p>
  )
}

export default HotelStars
