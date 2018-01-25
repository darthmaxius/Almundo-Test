import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from '../components/box'

class Filters extends Component {
  render () {
    return (
      <Box></Box>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
