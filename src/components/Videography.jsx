import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar1 from './Navbar1'

function Videography(){
    return(
        <div>
            <Navbar1/>
            <div>
                <div>
                    <nav className='sub-navbar-videos'>
                        <NavLink className='sub-nav-component' to='/videography/couplevideos'>Couple Videos</NavLink>
                        <NavLink className='sub-nav-component' to='/videography/cinematography'>Cinematography</NavLink>
                    </nav>
                    <Outlet/>
                </div>
            </div>
            {Footer()}
        </div>
    )
}

export default Videography;