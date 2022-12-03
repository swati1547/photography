import React from 'react';
// import '../Stylefiles/Gallery-blog.css'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar1 from './Navbar1'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Galleryblog(){
    return(
        <div>
            <Navbar1/>
            <div className='sub-navigation-bar'>
            <Navbar className='sub-navbar' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle className='navbar-toggle' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='sub-nav-component' to='/img-gallery/Wedding'>Wedding</NavLink>
            <NavLink className='sub-nav-component' to='/img-gallery/Pre-wedding'>Pre-wedding</NavLink>
            <NavLink className='sub-nav-component' to='/img-gallery/maternity&kids'>Maternity</NavLink>
            <NavLink className='sub-nav-component' to='/img-gallery/fashion'>Kids</NavLink>
            <NavLink className='sub-nav-component' to='/img-gallery/fashion'>Fashion</NavLink>
            <NavLink className='sub-nav-component' to='/img-gallery/fashion'>Celebrity</NavLink>
            <NavLink className='sub-nav-component' to='/img-gallery/fashion'>Fashion</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    </div>
    <Outlet/>


            {/* <div className='gallery-page'>
                <div>
                    <nav className='sub-navbar'>
                        <Link className='sub-nav-component' to='/img-gallery/Wedding'>Wedding</Link>
                        <Link className='sub-nav-component' to='/img-gallery/Pre-wedding'>Pre-wedding</Link>
                        <Link className='sub-nav-component' to='/img-gallery/maternity&kids'>Maternity & Kids</Link>
                        <Link className='sub-nav-component' to='/img-gallery/fashion'>Fashion</Link>
                    </nav>
                    <Outlet/>
                </div>
            </div> */}
        </div>
    )
}

export default Galleryblog;