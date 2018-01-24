import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const Menu = (props) => {
  return (
    <Navbar className='container-fluid'>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#home'>Julio Verne</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href='#'>
          Hoteles
        </NavItem>
        <NavItem eventKey={2} href='#'>
          Vuelos
        </NavItem>
        <NavItem eventKey={3} href='#'>
          Paquetes
        </NavItem>
        <NavItem eventKey={4} href='#'>
          Expertos
        </NavItem>
        <NavItem eventKey={5} href='#'>
          Paquetes Expertos
        </NavItem>
        <NavDropdown eventKey={6} title='Más' id='basic-nav-dropdown'>
          <MenuItem eventKey={6.1}> Vuelo + Hotel
          </MenuItem>
          <MenuItem eventKey={6.2}> Disney
          </MenuItem>
          <MenuItem eventKey={6.3}> Actividades
          </MenuItem>
          <MenuItem eventKey={6.4}> Seguros
          </MenuItem>
          <MenuItem eventKey={6.5}> Autos
          </MenuItem>
          <MenuItem eventKey={6.6}> Cruceros
          </MenuItem>
          <MenuItem eventKey={6.7}> Escapadas
          </MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default Menu
