import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultsComponent from '../components/results'

class Results extends Component {
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
