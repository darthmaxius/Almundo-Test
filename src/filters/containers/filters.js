import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from '../components/box'

class Filters extends Component {
  render () {
    return (
      <Box results={this.props.filters}></Box>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
