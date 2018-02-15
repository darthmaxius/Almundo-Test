import React, { Component } from 'react'
import { connect } from 'react-redux'
import Star from './star'

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

    return <Star
             key={item}
             stars={item}
             handleClickUpdateResults={handleClickUpdateResults}
             handleClickUpdateFilters={handleClickUpdateFilters}
             handleForceUpdate={handleForceUpdate}
             filterSelected={filterSelected}
             checked={checked}>
             {item > 0 ? `${item} Estrellas` : `Todos`}
           </Star>
  })
}

class BoxStars extends Component {
  handleForceUpdate = () => {
    this.forceUpdate()
  }

  render () {
    return (
      <div>
        <h4>Estrellas</h4>
        {repeat(this.props.results, this.props.handleClickUpdateResults, this.props.filterSelected, this.props.handleClickUpdateFilters, this.handleForceUpdate)}
      </div>
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
