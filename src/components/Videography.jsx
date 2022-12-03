import React from 'react';
// import '../Stylefiles/Gallery-blog.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar1 from './Navbar1'

function Videography(){
    return(
        <div>
            <Navbar1/>
            <div>
                <div>
                    <nav className='sub-navbar'>
                        <Link className='sub-nav-component' to='/videography/couplevideos'>couple videos</Link>
                        <Link className='sub-nav-component' to='/videography/cinematography'>Cinematography</Link>
                    </nav>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Videography;