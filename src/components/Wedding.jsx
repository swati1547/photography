import React from 'react';
// import "../Stylefiles/wedding.css";
import photo19 from "../images/pic19.jpg"
import photo2 from "../images/pic2.jpg"
import photo3 from "../images/pic3.jpg"
import photo5 from "../images/pic5.jpg"
import photo6 from "../images/pic6.jpg"
import photo7 from "../images/pic7.jpg"
import photo8 from "../images/pic8.jpg"
import photo9 from "../images/pic9.jpg"
import photo10 from "../images/pic10.jpg"
import photo11 from "../images/pic11.jpg"
import photo12 from "../images/pic12.jpg"
import photo13 from "../images/pic13.jpg"
import photo14 from "../images/pic14.jpg"
import Footer from './Footer';


function Wedding(){
    return(
        <div>
        <div className='wedding-sec'>
            <div className='photo-sec-para'>
                <p>As a professional wedding photographer, we understand the essence of Indian weddings. We know
                that they are a joyous and momentous occasion, full of color, life, and love. As one of the
                best wedding photographers in Maharshtra we strive to capture all of these elements in our photos,
                so that our clients can relive their wedding day again and again.
                </p>
                <p>
                Our wedding photography style is modern, contemporary and off-beat. A short selection of some of our
                favourites is given below.
                </p>
            </div>
        
            <div className='row'>
                <img className='col-sm-12 col-md-6 col-lg-3 image pic-ver' src={photo19}></img>
                <img className='col-sm-12 col-md-6 col-lg-3 image pic-ver' src={photo11}></img>                 
                <img className='col-sm-12 col-md-6 col-lg-3 image pic-ver' src={photo14}></img>
                <img className='col-sm-12 col-md-6 col-lg-3 image pic-ver-1' src={photo6}></img>             
                <img className='col-sm-12 col-md-6 col-lg-3 image pic' src={photo8}></img>
                <img className='col-sm-12 col-md-6 col-lg-3 image pic' src={photo5}></img>
                <img className='col-sm-12 col-md-6 col-lg-3 image pic' src={photo9}></img>
                <img className='col-sm-12 col-md-6 col-lg-6 image pic-hor' src={photo10}></img>
                <img className='col-sm-12 col-md-6 col-lg-6 image pic-hor' src={photo12}></img>
                <img className='col-sm-12 col-md-6 col-lg-3 image pic' src={photo2}></img>
                <img className='col-sm-12 col-md-6 col-lg-3 image pic' src={photo3}></img>
                <img className='col-sm-12 col-md-6 col-lg-3 image pic' src={photo7}></img>
                <img className='col-sm-12 col-md-6 col-lg-3 image pic' src={photo13}></img>
            </div>
        </div>
        {Footer()}
        </div>
    )
}

export default Wedding;
