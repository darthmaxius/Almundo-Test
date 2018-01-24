import React from 'react'
import { Button } from 'react-bootstrap'
import './hotel-price.css'

const round = (value) => {
  return Math.round(value * 100) / 100
}

const HotelPrice = (props) => {
  return (
    <div className='Price'>
      <p className='Price-subtitle'>
        Precio por noche por habitación
      </p>
      <h4 className='Price-title'><span className='Price-currency'>{props.currency}</span> {round(props.price)}</h4>
      <p className='Price-subtitle'>
        Impuestos y tasas no incluidos
      </p>
      <Button bsStyle='primary' block>
        Ver Hotel
      </Button>
    </div>
  )
}

export default HotelPrice
