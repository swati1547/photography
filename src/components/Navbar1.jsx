import React, { useEffect } from 'react';
// import '../Stylefiles/Navbar1.css';
import {NavLink, Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png'

function Navbar1(){
    return(
        <div>
    <nav className='nav'>
        <div className='logo1'>
            <h1>photo</h1>
            {/* <img src={logo}></img> */}
        </div>
        <div className='nav_bar'>
            <ul className='navigations'>
                <NavLink className='home-page' to='/'>Home</NavLink>
                <NavLink className='nav-component' to='/about'>About</NavLink>
                <NavLink className='nav-component' to='/img-gallery'>Gallery</NavLink>
                <NavLink className='nav-component' to='/videography'>Films</NavLink>
                <NavLink className='nav-component' to='/pricing'>Pricing</NavLink>
            </ul>
        </div>
    </nav>
    {/* <div className='logodiv'>
    <img className='logo2' src={logo}></img>
    </div> */}
    </div>
    )
}

export default Navbar1;

