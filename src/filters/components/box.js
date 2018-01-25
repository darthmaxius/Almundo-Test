import React from 'react'
import Star from './star'

const Box = (props) => {
  return (
    <div>
      <h3>Filtros</h3>
      {props.children}
      <Star stars={1}>
        1 Estrellas
      </Star>
      <Star stars={2}>
        2 Estrellas
      </Star>
      <Star stars={3}>
        3 Estrellas
      </Star>
      <Star stars={4}>
        4 Estrellas
      </Star>
      <Star stars={5}>
        5 Estrellas
      </Star>
      <Star stars={0}>
        Todos
      </Star>
    </div>
  )
}

export default Box
