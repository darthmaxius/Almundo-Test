import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { Button } from 'react-bootstrap'

class Star extends Component {
  handleClick = ()=>{
    this.props.actions.clickStars(this.props.stars)
  }

  render () {
    return (
      <Button onClick={this.handleClick}>
        {this.props.children}
      </Button>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Star)
