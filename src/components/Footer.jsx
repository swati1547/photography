import React from 'react';
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdOutlinePlace, MdCall } from "react-icons/md";

function Footer(){
    return(
        <div className='footer'>
            <div className='over-lay'>
                <div className='row footer-rows'>

                    <div className='col-sm-3 col-md-3 col-lg-3 columns'>

                    </div>

                    <div className='col-sm-3 col-md-3 col-lg-3 columns f-columns'>
                        <ul className='footer_list'>
                            <li className='list_item'>Home</li>
                            <li className='list_item'>Services</li>
                            <li className='list_item'>Gallery</li>
                            <li className='list_item'>Pricing</li>
                        </ul>
                    </div>

                    <div className='col-sm-3 col-md-3 col-lg-3 columns footer_social'>
                        <p>follow us</p>
                        <ul className='social'>
                            <li className='socialm'><a className='sicon' href='https://www.instagram.com/'>
                            <BsInstagram/>
                            </a></li>
                            <li className='socialm'><a className='sicon' href='https://www.facebook.com/'>
                            <BsFacebook/>
                            </a></li>
                            <li className='socialm'><a className='sicon' href='https://twitter.com/i/flow/login'>
                            <FaTwitter/>
                            </a></li>
                            <li className='socialm'><a className='sicon' href='https://mail.google.com/mail/u/0/#inbox'>
                            <FiMail/>
                            </a></li>
                        </ul>
                    </div>

                    <div className='col-sm-3 col-md-3 col-lg-3 columns contact_info'>
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
                            email address
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