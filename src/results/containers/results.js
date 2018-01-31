import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultsComponent from '../components/results'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index'

class Results extends Component {
  componentDidMount () {
    this.props.actions.drawResults()
  }

  render () {
    return (
      <ResultsComponent results={this.props.results} />
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    results: state.get('hotels')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
