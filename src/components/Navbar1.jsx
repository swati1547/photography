import React, { useEffect } from 'react';
import {NavLink, Link} from "react-router-dom"

function Navbar1(){
    return(
        <div>
            <nav className='nav'>
            <div className=' col-lg-6'>
            <div className='logo1'>
                    <h1>photo</h1>
                    {/* <img src={logo}></img> */}
                </div>
            </div>
                
                <div className='col-lg-6 nav-column'>
                <div className='nav_bar'>
                    <ul className='navigations'>
                        <NavLink className='home-page' to='/'>Home</NavLink>
                        <NavLink className='nav-component' to='/about'>About</NavLink>
                        <NavLink className='nav-component' to='/img-gallery'>Gallery</NavLink>
                        <NavLink className='nav-component' to='/videography'>Films</NavLink>
                        <NavLink className='nav-component' to='/pricing'>Pricing</NavLink>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar1;

