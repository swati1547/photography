import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar1 from './Navbar1'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './Footer';
// import GoTOTop from './gototop';

function Galleryblog(){
    return(
        <div>
        <div className='container-fluid'>
          <Navbar1/>
        </div>
            
          <div className='sub-navigation-bar'>
            <Navbar className='sub-navbar' collapseOnSelect expand="lg" bg="light" variant="light">
              <Container>
                <Navbar.Toggle className='navbar-toggle' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavLink className='sub-nav-component' to='/img-gallery/wedding'>Wedding</NavLink>
                  <NavLink className='sub-nav-component' to='/img-gallery/pre-wedding'>Pre-wedding</NavLink>
                  <NavLink className='sub-nav-component' to='/img-gallery/maternity'>Maternity</NavLink>
                  <NavLink className='sub-nav-component' to='/img-gallery/kids'>Kids</NavLink>
                  <NavLink className='sub-nav-component' to='/img-gallery/fashion'>Fashion</NavLink>
                  <NavLink className='sub-nav-component' to='/img-gallery/celebrity'>Celebrity</NavLink>
                  <NavLink className='sub-nav-component' to='/img-gallery/other'>Other</NavLink>
                </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
    <Outlet/>

        {/* <GoTOTop/> */}
        {Footer()}
        </div>
    )
}

export default Galleryblog;