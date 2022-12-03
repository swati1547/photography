import React from 'react';
// import "../Stylefiles/Icons.css";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import {AiOutlineYoutube} from "react-icons/ai"


function Icons(){
    return(
        <div className='icons-bar row'>
            <a href="#" class="icons-bar__icons"><BsInstagram className='icons-bar__icon'/></a>
            <a href="#" class="icons-bar__icons"><BsWhatsapp className='icons-bar__icon'/></a>
            <a href="#" class="icons-bar__icons"><AiOutlineYoutube className='icons-bar__icon'/></a>
            <a href="#" class="icons-bar__icons"><BsFacebook className='icons-bar__icon'/></a>
        </div>
    )
}

export default Icons;
