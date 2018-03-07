import React from 'react'
import { Navbar } from 'react-bootstrap'
import Logo from '../../logo/components/logo'
import './menu.css'

const Menu = (props) => {
  return (
    <Navbar fluid className='Menu'>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#home' className='Logo-isologo'>
            <Logo />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  )
}

export default Menu
