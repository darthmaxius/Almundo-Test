import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Title from './title-page'
import Filters from '../../filters/containers/filters'
import Hotel from '../components/hotel'

const Results = (props) => {
  return (
    <div className='fluid container'>
      <Title destiny={props.destiny} />
      <Grid bsClass=''>
        <Row className='show-grid'>
          <Col md={3}>
          <Filters></Filters>
          </Col>
          <Col md={9}>
          {props.loading ?
             <h2>Cargando</h2>
             :
             props.results.map((item) => {
               return <Hotel key={item.id} {...item} />
             })}
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Results
