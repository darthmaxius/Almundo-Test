import React, { Component } from 'react'
import { connect } from 'react-redux'
import Star from './star'

const repeat = (results, handleClick, filterSelected) => {
  return results.map((item) => {
    return <Star
             key={item}
             stars={item}
             handleClick={handleClick}
             filterSelected={filterSelected}>
             {item > 0 ? `${item} Estrellas` : `Todos`}
           </Star>
  })
}

class BoxStars extends Component {
  render () {
    return (
      <div>
        <h3>Filtros</h3>
        {repeat(this.props.results, this.props.handleClick, this.props.filterSelected)}
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
