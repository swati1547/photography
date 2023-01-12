import React from 'react';
import {Link} from "react-router-dom"
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import {AiOutlineYoutube} from "react-icons/ai"
import {FiMail} from "react-icons/fi"
import { MdOutlinePlace, MdCall } from "react-icons/md";
import logo from '../images/logo_img.png'

function Footer(){
    return(
        <div className='footer'>
            <div className='over-lay'>
                <div className='row footer-rows'>

                    <div className='col-sm-12 col-md-3 col-lg-3 columns'>
                        <div className='logo-div'>
                            <img className='logo-div__img' src={logo} alt='logo'></img>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-3 col-lg-3 columns f-columns'>
                        <ul className='footer_list'>
                            <Link className='list_item' to='/'>Home</Link>
                            <Link className='list_item' to='/about'>About</Link>
                            <Link className='list_item' to='/img-gallery'>Gallery</Link>
                            <Link className='list_item' to='/videography'>Films</Link>
                            <Link className='list_item' to='/pricing'>Pricing</Link>
                        </ul>
                    </div>

                    <div className='col-sm-12 col-md-3 col-lg-3 columns footer_social'>
                        <p className='follow-us'>follow us</p>
                        <ul className='social'>
                            <li className='socialm'><a className='sicon' href='https://wa.me/919604974275'>
                            <BsWhatsapp/>
                            </a></li>
                            <li className='socialm'><a className='sicon' href='https://instagram.com/who_its_nil?igshid=YmMyMTA2M2Y='>
                            <BsInstagram/>
                            </a></li>
                            <li className='socialm'><a className='sicon' href='https://www.youtube.com/@nilgarje8907'>
                            <AiOutlineYoutube/>
                            </a></li>
                            <li className='socialm'><a className='sicon' href='https://www.facebook.com/nilesh.garje.90?mibextid=ZbWKwL'>
                            <BsFacebook/>
                            </a></li>
                        </ul>
                    </div>

                    <div className='col-sm-12 col-md-3 col-lg-3 columns contact_info'>
                        <h1 className='footer_head'>Get in touch</h1>
                        <p className='footer_para'>
                            <MdOutlinePlace className='c_icon'/>
                            Pune, Ahmednagar, Aurangabad
                        </p>
                        <p className='footer_para'>
                            <MdCall className='c_icon'/>
                            9604974275
                        </p>
                        <p className='footer_para'>
                            <FiMail className='c_icon'/>
                            nilesh.garje111@gmail.com
                        </p>
                    </div>

                </div>
                <div className='copyright'>
                    <p>copyright©2022 Photography. All rights reserved</p>
                </div>
            </div>
        </div>
        
    )
}

export default Footer;