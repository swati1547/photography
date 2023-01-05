import React from 'react';
import Intro from './intro.jsx'

function Header(){
    return(
        <>
        <div className='header'>
            <div className='overlay overlay_box'>      
                <Intro/>
            </div>
        </div>
        </>
    )
}

export default Header;

