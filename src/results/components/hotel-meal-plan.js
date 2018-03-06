import React from 'react'

const HotelMealPlan = (props) => {
  let amenities = []
  props.amenities.forEach(element => {
    amenities.push(<i className={`icon-${element}`} key={element}></i>)
  });

  return (
    <p>
      {amenities.map((item) => item)}
    </p>
  )
}

export default HotelMealPlan
