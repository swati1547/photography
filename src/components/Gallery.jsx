import React from 'react';
// import "../Stylefiles/Gallery.css";
import photo1 from "../images/pic1.jpg"
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
import { Link } from "react-router-dom"

function Gallery(){

    return(
        <div className='gallery-section'>
            <h1 className='heading_secondary u-center-text back-head'>captured moments</h1>
            <h1 className='heading_secondary u-center-text front-head'>Gallery</h1>
            <div className='img-gallery'>
                <div className='row'>                        
                    <img className='col-sm-12 col-md-6 col-lg-3 image pic-ver hover-eff' src={photo1}></img>                   
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

                <div className='button-div u-margin-top-huge'>
                    <p>For more images</p>
                    <button className='button'>
                        <span>
                        <Link className='btn-link' to='/img-gallery'>Go To Gallery</Link>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    
    )
}

export default Gallery;

