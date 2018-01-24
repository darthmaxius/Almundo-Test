import React from 'react'

const Capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const HotelMealPlan = (props) => {
  return (
    <p>
      {Capitalize(props.title)}
    </p>
  )
}

export default HotelMealPlan
