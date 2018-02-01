import React, { Component } from 'react'
import { connect } from 'react-redux'
import BoxStars from '../components/box-stars'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index'

class Filters extends Component {
  render () {
    return (
      <BoxStars results={this.props.filters} handleClick={this.props.actions.updateResults}></BoxStars>
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
