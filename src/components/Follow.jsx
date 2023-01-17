import React from 'react';
import logo1 from '../images/logo1.jpeg'
import logo2 from '../images/logo2.jpeg'
import logo3 from '../images/logo3.jpeg'
import logo4 from '../images/logo4.jpeg'

function Follow(){
    return(
            <div className='follow_us'>
                <p className='contact_text'>For knowing new poses and updates follow me on instagram and you tube
                    and please dont hesitate to contact me. Whats up Now!!</p>
                <div className='contact'>
                    <a href='https://wa.me/919604974275'><img src={logo2} className='contact__logo' alt=''></img></a>
                    <a href='https://instagram.com/who_its_nil?igshid=YmMyMTA2M2Y='><img src={logo3} className='contact__logo' alt=''></img></a>
                    <a href='https://www.youtube.com/@nilgarje8907'><img src={logo1} className='contact__logo' alt=''></img></a>
                    <a href='https://www.facebook.com/nilesh.garje.90?mibextid=ZbWKwL'><img src={logo4} className='contact__logo' alt=''></img></a>
                </div>
            </div>
    )
}

export default Follow;
