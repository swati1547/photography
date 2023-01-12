import React from 'react';
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import {AiOutlineYoutube} from "react-icons/ai"


function Icons(){
    return(
        <div className='icons-bar'>
        <div>
            <a href="https://wa.me/919604974275" class="icons-bar__icons"><BsWhatsapp className='icons-bar__icon'/></a>
            <a href="https://instagram.com/who_its_nil?igshid=YmMyMTA2M2Y=" class="icons-bar__icons"><BsInstagram className='icons-bar__icon'/></a>
            <a href="https://www.youtube.com/@nilgarje8907" class="icons-bar__icons"><AiOutlineYoutube className='icons-bar__icon'/></a>
            <a href="https://www.facebook.com/nilesh.garje.90?mibextid=ZbWKwL" class="icons-bar__icons"><BsFacebook className='icons-bar__icon'/></a>
        </div>
        </div>
    )
}

export default Icons;
