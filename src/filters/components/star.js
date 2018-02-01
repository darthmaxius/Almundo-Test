import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Checkbox } from 'react-bootstrap'

class Star extends Component {
  handleClick = () => {
    let filters = this.props.filterSelected;

    if (!filters.stars){
      filters.stars=[];
    }
    const key = filters.stars.indexOf(this.props.stars);

    if (this.props.stars){
      if (key == -1){
        filters.stars.push(this.props.stars);
      } else {
        filters.stars.splice(key, 1);
      }
    } else {
      filters.stars = []
    }

    this.props.handleClick(filters);
  }

  render () {
    return (
      <Checkbox onClick={this.handleClick}>{this.props.children}</Checkbox>
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

export default connect(mapStateToProps, mapDispatchToProps)(Star)
