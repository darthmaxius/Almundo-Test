import React, { Component } from 'react'
import { Panel, FormGroup, FormControl, Form, Button, Grid, Row, Col } from 'react-bootstrap'

class BoxName extends Component {
  render() {
    return (
      <Panel defaultExpanded>
        <Panel.Heading>
          <Panel.Title toggle>
            Nombre del Hotel
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <Form>
              <Grid bsClass=''>
                <Row className='show-grid'>
                  <Col md={7}>
                    <FormGroup>
                      <FormControl type="text" placeholder="Enter text" />
                    </FormGroup>
                  </Col>
                  <Col md={5}>
                    <Button type="submit" block>Aceptar</Button>
                  </Col>
                </Row>
              </Grid>
            </Form>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    )
  }
}

export default BoxName