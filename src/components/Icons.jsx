import React from 'react';
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import {AiOutlineYoutube} from "react-icons/ai"


function Icons(){
    return(
        <div className='icons-bar'>
        <div className='row'>
            <a href="#" class="icons-bar__icons"><BsInstagram className='icons-bar__icon'/></a>
            <a href="#" class="icons-bar__icons"><BsWhatsapp className='icons-bar__icon'/></a>
            <a href="#" class="icons-bar__icons"><AiOutlineYoutube className='icons-bar__icon'/></a>
            <a href="#" class="icons-bar__icons"><BsFacebook className='icons-bar__icon'/></a>
        </div>
        </div>
    )
}

export default Icons;
