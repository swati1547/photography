import React from 'react';
// import "../Stylefiles/About.css";
import photo from '../images/photo.jpg'
import {NavLink} from "react-router-dom"

function About(){
    return(
        <div className='section-about'>

            <h2 className='heading_secondary u-center-text u-margin-bottom-large back-head'>about</h2>
            <h2 className='heading_secondary u-center-text u-margin-bottom-large front-head'>me</h2>

            <div className='row'>

                {/* about info section */}
                <div className='col-lg-6 about__text-sec'>

                    {/* first paragraph */}
                    <h3 className='heading-tertiory u-margin-bottom-small'>
                        Passionate photographer
                    </h3>
                    <p className='paragraph'>Hello, My name is Nilesh Garje, I’m a wedding photographer based
                    in Pune Attempting to capture honest & authentic moments in any event. 
                    </p>
                    {/* first paragraph ends */}

                    {/* second paragraph */}
                    <h3 className='heading-tertiory u-margin-bottom-small'>
                        model
                    </h3>
                    <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                    a galley. 
                    </p>
                    {/* second paragraph ends */}

                    {/* buttons */}
                    <button className='white-btn' href='https://www.instagram.com/nilgarje_/'>
                        Follow me on instagram
                    </button>
                    <NavLink className='text-btn' to='/about'>Know more &rarr;</NavLink>
                    {/* buttons end */}
                </div>
                {/* about info section ends */}

                {/* about image section */}
                <div className='col-lg-6'>
                    <img className='about-img' src={photo} alt="image"/>
                </div>
                {/* about image section ends */}
                
            </div>
        </div>
    )
}

export default About;

