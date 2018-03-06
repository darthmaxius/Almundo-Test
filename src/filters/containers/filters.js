import React, { Component } from 'react'
import { connect } from 'react-redux'
import BoxStars from './box-stars'
import BoxName from './box-name'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index'

class Filters extends Component {
  render() {
    return (
      <div>
        <h3>Filtros</h3>
        <BoxName results={this.props.filters} handleClickUpdateResults={this.props.actions.updateResults} handleClickUpdateFilters={this.props.actions.updateFilters} />
        <BoxStars results={this.props.filters} handleClickUpdateResults={this.props.actions.updateResults} handleClickUpdateFilters={this.props.actions.updateFilters} />
      </div>
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
