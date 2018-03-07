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
        <Row className="row-eq-height">
          <Col md={3} sm={12}>
            <img className='Hotel-img img-responsive' src={`${IMAGES_HOTELS}/${props.image}`} />
          </Col>
          <Col md={6} sm={12} className='Hotel-data'>
            <Title name={props.name} />
            <p className="StarsBlock"><Stars stars={props.stars} /></p>
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
