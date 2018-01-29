import React from 'react'
import Star from './star'

const Box = (props) => {
  return (
    <div>
      <h3>Filtros</h3>
      {props.results.map((item) => {
         return <Star key={item} stars={item}>
                  {item} Estrellas
                </Star>
       })}
    </div>
  )
}

export default Box
