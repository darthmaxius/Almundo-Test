import React, { Component } from 'react'
import { Panel, FormGroup, FormControl, Form, Button, Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

class BoxName extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const form = event.target

    let filters = this.props.filterSelected
    filters.name = this.stringName.value

    this.props.handleClickUpdateFilters(filters)
    this.props.handleClickUpdateResults(filters)
  }

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
            <Form onSubmit={this.handleSubmit}>
              <Grid bsClass=''>
                <Row className='show-grid'>
                  <Col md={7}>
                    <FormGroup>
                      <FormControl type="text" placeholder="Enter text" inputRef={(e) => { this.stringName = e }} />
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

const mapStateToProps = (state, props) => {
  return {
    filterSelected: state.get('filterSelected')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxName)