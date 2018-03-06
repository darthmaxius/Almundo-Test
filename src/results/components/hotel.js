import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Title from './hotel-title'
import Stars from '../../filters/components/star-icon'
import MealPlan from './hotel-meal-plan'
import Price from './hotel-price'
import { IMAGES_HOTELS } from '../../config'
import './hotel.css'

const Hotel = (props) => {
  return (
    <div className='Hotel'>
      <Grid bsClass='Hotel-item'>
        <Row>
          <Col md={3}>
            <img className='Hotel-img img-responsive' src={`${IMAGES_HOTELS}/${props.image}`} />
          </Col>
          <Col md={6} className='Hotel-data'>
            <Title name={props.name} />
            <Stars stars={props.stars} />
            <MealPlan amenities={props.amenities} />
          </Col>
          <Col md={3}>
            <div className='Hotel-paddding'>
              <Price currency={`ARS`} price={props.price} />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Hotel
