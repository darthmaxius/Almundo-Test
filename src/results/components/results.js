import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Filters from '../../filters/containers/filters'
import Hotel from '../components/hotel'

const Results = (props) => {
  return (
    <div className='container-fluid'>
      {props.failed ?
        <h1>Algo falló</h1>
        :
        <Grid bsClass=''>
          <Row className='show-grid'>
            <Col md={3} sm={12}>
              <Filters></Filters>
            </Col>
            <Col md={9} sm={12}>
              {props.loading ?
                <h2>Cargando</h2>
                :
                props.results.map((item) => {
                  return <Hotel key={item.id} {...item} />
                })}
            </Col>
          </Row>
        </Grid>
      }
    </div>
  )
}

export default Results
