import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'



function Header() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>
            <img src={logo} alt="ProShop" />
              Luke's Fullstack_app
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav'/>
              <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'> Cart</Nav.Link>
              <Nav.Link href='/login'> Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header