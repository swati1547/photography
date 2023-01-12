import {React} from 'react';
import {NavLink} from "react-router-dom"
import logo from "../images/logo_img.png"

function Navbar1(){
    return(
        <div>
            <nav className='nav'>
            <div className=' col-lg-6'>
            <div className='logo1'>
                    <div className='logo'>
                        <img className='logo__img' src={logo} alt='logo'></img>
                    </div>
                    
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

