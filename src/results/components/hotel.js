import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Title from './hotel-title'
import Stars from './hotel-stars'
import MealPlan from './hotel-meal-plan'
import Price from './hotel-price'
import './hotel.css'

const Hotel = (props) => {
  return (
    <div className='Hotel'>
      <Grid bsClass='Hotel-item'>
        <Row>
          <Col md={3}>
          <img className='Hotel-img img-responsive' src={props.images[0].url} />
          </Col>
          <Col md={6} className='Hotel-data'>
          <Title name={props.name} />
          <Stars stars={props.stars} />
          <MealPlan title={props.rate.meal_plan.description} />
          </Col>
          <Col md={3}>
          <div className='Hotel-paddding'>
            <Price currency={props.rate.price.currency.code} price={props.rate.price.total_with_operation_cost} />
          </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Hotel
