import React from 'react';
import pic1 from '../images/pre-wedding/prew-dp.jpg'
import pic2 from '../images/celebrity/cinema-dp.jpg'
import backvideo from '../images/back_vid.mp4'
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
                <h2 className='back-head'>Videography</h2>
                <h2 className='heading_secondary front-head'>filming</h2>
            </div>
            <div className='video-sec-block'>
            <div className='row'>
                <div className='v-graphy'>
                    <figure className='v-graphy__shape'>
                        <img className='v-graphy__img' src={pic1} alt='couple_image'></img>
                    </figure>
                    <div className='v-graphy__text'>
                        <h3 className='heading-tertiory u-margin-bottom-small'>Couple Shoot</h3>
                        <p className='v-graphy__para'>couple who will marry shortly. The word says prewedding, 
                        which means before the wedding, so that this shoot can be done before 2 to 3 months of 
                        marriage. This is just like the music video with the bride and groom as the actor and actress.
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
                        <h3 className='heading-tertiory u-margin-bottom-small'>Cinematography</h3>
                        <p className='v-graphy__para'>We capture best cinematic movements Telling a story on 
                        film isn’t just about recording the action. It’s also about how the images are 
                        captured, in the film and television world. It involves such techniques as the 
                        general composition of a scene, the lighting of the set or location, the choice of 
                        cameras, lenses, filters, and film stock, the camera angle and movements, and the 
                        integration of any special effects.
                        </p>
                    </div>
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
