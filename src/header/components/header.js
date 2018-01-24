import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const Header = (props) => {
  return (
    <header>
      {props.children}
    </header>
  )
}

export default Header
