import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import Star from '../components/star'
import StarIcon from '../components/star-icon'

const repeat = (results, handleClickUpdateResults, filterSelected, handleClickUpdateFilters, handleForceUpdate) => {
  return results.map((item) => {
    let checked = false;

    if(item == 0 && filterSelected.stars.length == 0){
      checked = true
    }
    else{
      checked = false;
    }

    if(!checked && filterSelected.stars.indexOf(item)>-1){
      checked = true;
    }

    const propsElement = {
      key: item,
      stars:item,
      handleClickUpdateResults: handleClickUpdateResults,
      handleClickUpdateFilters: handleClickUpdateFilters,
      handleForceUpdate: handleForceUpdate,
      filterSelected: filterSelected,
      checked:checked
    }

    return <Star {...propsElement}>
            {item > 0 ? <StarIcon stars={item} /> : `Todos`}
           </Star>
  })
}

class BoxStars extends Component {
  handleForceUpdate = () => {
    this.forceUpdate()
  }

  render () {
    return (
      <Panel id='collapsible-panel-example-2' defaultExpanded>
        <Panel.Heading>
          <Panel.Title toggle>
          Estrellas
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
          {repeat(this.props.results, this.props.handleClickUpdateResults, this.props.filterSelected, this.props.handleClickUpdateFilters, this.handleForceUpdate)}
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxStars)
