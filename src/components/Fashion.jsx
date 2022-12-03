import React from 'react';
// import "../Stylefiles/fashion.css";
import photo1 from "../images/mod2.jpg"
import photo2 from "../images/mod5.jpg"
import photo3 from "../images/mod3.jpg"
import photo4 from "../images/mod7.jpg"
import photo5 from "../images/mod8.jpg"
import photo6 from "../images/mod1.jpg"
import photo7 from "../images/mod6.jpg"
import photo8 from "../images/mod4.jpg"
import photo18 from "../images/pic18.jpg"
import photo20 from "../images/pic20.jpg"
import photo22 from "../images/pic22.jpg"
import Footer from './Footer';



function Fashion(){
    return(
        <div>
        <div className='fashion-sec'>
        <div className='photo-sec-para'>
                <p>React Carousel is a slideshow inside a bunch of content. 
                    It launches many images, text, or HTML elements and supports previous/next buttons.
                </p>
                <p>The Page Visibility API is cross-browser compatible and prevents carousel scrolling when 
                    the user is not viewing a webpage such as when the browser tab is inactive, the browser 
                    window is minimized, etc
                </p>
            </div>
            <div className='row'>
                <img className='col-sm-12 col-md-6 col-lg-4 image k-pic' src={photo6}></img>
                <img className='col-sm-12 col-md-6 col-lg-4 image k-pic' src={photo7}></img>
                <img className='col-sm-12 col-md-6 col-lg-4 image k-pic' src={photo8}></img>
                <img className='col-sm-12 col-md-6 col-lg-4 image k-pic-v' src={photo18}></img>             
                <img className='col-sm-12 col-md-6 col-lg-4 image k-pic-v' src={photo20}></img>
                <img className='col-sm-12 col-md-6 col-lg-4 image k-pic-v' src={photo22}></img>
                <img className='col-sm-12 col-md-6 col-lg-6 image k-pic' src={photo4}></img> 
                <img className='col-sm-12 col-md-6 col-lg-6 image k-pic' src={photo5}></img>
                <img className='col-sm-12 col-md-6 col-lg-4 image k-pic' src={photo1}></img>             
                <img className='col-sm-12 col-md-6 col-lg-4 image k-pic' src={photo2}></img>
                <img className='col-sm-12 col-md-6 col-lg-4 image k-pic' src={photo3}></img>                                                            
            </div>
            
        </div>
        {Footer()}
        </div>
    )
}

export default Fashion;
