import React from 'react'
import Star from './star'

const repeat = (results, handleClick) => {
  return results.map((item) => {
    return <Star key={item} stars={item} handleClick={handleClick}>
             {item > 0 ? `${item} Estrellas` : `Todos`}
           </Star>
  })
}

const BoxStars = (props) => {
  return (
    <div>
      <h3>Filtros</h3>
      {repeat(props.results, props.handleClick)}
    </div>
  )
}

export default BoxStars
