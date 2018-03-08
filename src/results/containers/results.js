import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultsComponent from '../components/results'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index'

class Results extends Component {
  componentDidMount() {
    this.props.actions.getResults()
  }

  render() {
    return (
      <ResultsComponent results={this.props.results} loading={this.props.loading} failed={this.props.failed} />
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    results: state.get('hotels'),
    loading: state.get('loading'),
    failed: state.get('failed')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
