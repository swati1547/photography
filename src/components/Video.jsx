import React from 'react';
// import "../Stylefiles/Video.css";
// import Ratio from 'react-bootstrap/Ratio';
import video from "../images/video.mp4"
import pic1 from '../images/couple2.jpg'
import pic2 from '../images/couple3.jpg'
import backvideo from '../images/back-video.mp4'
import { Link } from 'react-router-dom';

function Video(){
    return(
        
        <section className='section-videography'>
        <div className='bg-video'>
            <video className='bg-video__content' controls autoPlay muted loop>
                <source src={backvideo}></source>
            </video>
        </div>
            <div className='u-center-text u-margin-bottom-large video-div'>
                <h2 className='heading_secondary back-head'>videography</h2>
                <h2 className='heading_secondary front-head'>filming</h2>
            </div>
            <div className='row'>
                <div className='v-graphy'>
                    <figure className='v-graphy__shape'>
                        <img className='v-graphy__img' src={pic1} alt='couple_image'></img>
                    </figure>
                    <div className='v-graphy__text'>
                        <h3 className='heading-tertiory u-margin-bottom-small'>Couple Shoot</h3>
                        <p className='v-graphy__para'>More and more loved-up pairs are choosing to have a couples shoot,
                            whether it’s a pre wedding engagement shoot or just a selection of gorgeous photos
                            of where you are in your life right now. So it really doesn’t matter if you’re
                            engaged or not, you can still get those beautiful photos of you two together.
                        </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='v-graphy'>
                    <figure className='v-graphy__shape'>
                        <img className='v-graphy__img' src={pic2} alt='couple_image'></img>
                    </figure>
                    <div className='v-graphy__text'>
                        <h3 className='heading-tertiory u-margin-bottom-small'>asdfghjkl</h3>
                        <p className='v-graphy__para'>Use generated pseudo elements to make an element maintain the aspect 
                        ratio of your choosing. Perfect for responsively handling video or slideshow 
                        embeds based on the width of the parent.These helpers also can be used on any standard HTML child element. Styles are applied 
                        </p>
                    </div>
                </div>
            </div>

            <div className='u-center-text u-margin-top-huge'>
            <p>For all films</p>
                <button className='button'>
                        <span>
                        <Link className='btn-link' to='/videography'>Films</Link>
                        </span>
                </button>
            </div>
        </section>
    )
}

export default Video;
