import React, { Component } from 'react'
import { connect } from 'react-redux'
import BoxStars from './box-stars'
import BoxName from './box-name'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index'
import { Panel } from 'react-bootstrap'
import './filters.css'

class Filters extends Component {
  render() {
    return (
      <Panel defaultExpanded className='Filters'>
        <Panel.Heading>
          <Panel.Title toggle>
            <h3>Filtros</h3>
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <BoxName results={this.props.filters} handleClickUpdateResults={this.props.actions.updateResults} handleClickUpdateFilters={this.props.actions.updateFilters} />
            <BoxStars results={this.props.filters} handleClickUpdateResults={this.props.actions.updateResults} handleClickUpdateFilters={this.props.actions.updateFilters} />
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    filters: state.get('filters')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
