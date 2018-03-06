import React, { Component } from 'react'
import { Checkbox } from 'react-bootstrap'

class Star extends Component {
  state = {
    checked: this.props.checked
  }

  handleClick = event => {
    let filters = this.props.filterSelected

    if (!filters.stars) {
      filters.stars = []
    }
    const key = filters.stars.indexOf(this.props.stars)

    if (this.props.stars) {
      if (key == -1) {
        filters.stars.push(this.props.stars)
      } else {
        filters.stars.splice(key, 1)
      }
    } else {
      filters.stars = []
    }

    this.props.handleClickUpdateResults(filters)
    this.props.handleClickUpdateFilters(filters)
    this.props.handleForceUpdate()
  }

  handlerChange = el => el

  render() {
    return (
      <Checkbox onClick={this.handleClick} checked={this.props.checked} onChange={this.handlerChange}>{this.props.children}</Checkbox>
    )
  }
}

export default Star
