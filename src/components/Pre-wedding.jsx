import React, {useState} from 'react';
// import '../Stylefiles/prewedding.css'
import photo4 from "../images/pic4.jpg"
import photo11 from "../images/pic11.jpg"
import photo19 from "../images/pic19.jpg"
import photo15 from "../images/pic15.jpg"
import photo16 from "../images/pic16.jpg"
import Footer from './Footer';


function Prewedding(){
    return(
        <div>
            <div className='pre-wedding-sec'>
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
                {/* <button data-toggle="modal" data-target="#myModal"> */}
                <img data-toggle="modal" data-target="#myModal" 
                    className='col-sm-12 col-md-12 col-lg-6 image p-pic' 
                    src={photo15}>
                </img>  
                {/* </button> */}



                    <img className='col-sm-12 col-md-12 col-lg-6 image p-pic' src={photo16}></img>
                    <img className='col-sm-12 col-md-6 col-lg-4 image p-pic-ver' src={photo4}></img>
                    <img className='col-sm-12 col-md-6 col-lg-4 image p-pic-ver' src={photo19}></img>                 
                    <img className='col-sm-12 col-md-6 col-lg-4 image p-pic-ver' src={photo11}></img>
                </div>




                {/* <!-- Modal --> */}
                <div className='modal' id="myModal" role="dialog">
                <div>
                    <button type="button" class="close" data-dismiss="modal">
                        &times;
                    </button>
                    <div className="modal-dialog modal-xl modal-dialog-centered ">
                        {/* <!-- Modal content--> */}
                        <img className='image-modal' src={photo15}></img>
                    </div>
                    </div>
                </div>

            </div>
            {Footer()}
        </div>
    )

    {/* <div className='popup-image-div'>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <img className='popup-image' src={photo15} alt='picccccccccccc'></img>
                </div> */}
}

export default Prewedding;
