import React from 'react';
import aboutpic from '../images/about-pic.jpeg'
import {NavLink} from "react-router-dom"


function About(){
    return(
        <div className='section-about'>

            <h2 className='u-center-text u-margin-bottom-large back-head'>About</h2>
            <h2 className='heading_secondary u-center-text u-margin-bottom-large front-head'>me</h2>

            <div className='row about-sec-block'>

                {/* about info section */}
                <div className='col-lg-6 about__text-sec'>

                    {/* first paragraph */}
                    <h3 className='heading-tertiory u-margin-bottom-small'>
                        Passionate photographer
                    </h3>
                    <p className='paragraph'>Hello, I’m Nilesh Garje. I’m a wedding photographer based
                        in Pune Attempting to capture honest & authentic moments in any event as Maternity, Babyshower, Baby-shoot,
                        Pre-wedding, Wedding, Post-wedding, Fashion shoot, Celebrity shoot, etc. <br/>
                        <span style={{color: "black"}}>Service is available in all Maharashtra.</span>
                    </p>
                    {/* first paragraph ends */}

                    {/* second paragraph */}
                    <h3 className='heading-tertiory u-margin-bottom-small'>
                        model
                    </h3>
                    <p className='paragraph'>
                    Nil Garje, professional fashion model. 
                    participanted in 15+ events as model.
                    I have organise 12 events as organiser, also owner of Attitude Modeling Institute.
                    </p>
                    {/* second paragraph ends */}

                    {/* buttons */}
                    <button className='white-btn'>
                    <a className='white-btn__text' href='https://www.instagram.com/nilgarje_/'>
                    Follow me on instagram
                    </a>
                        
                    </button>
                    <NavLink className='text-btn' to='/about'>Know more &rarr;</NavLink>
                    {/* buttons end */}
                </div>
                {/* about info section ends */}

                {/* about image section */}
                <div className='col-lg-6'>
                    <img className='about-img' src={aboutpic} alt=""/>
                </div>
                {/* about image section ends */}
                
            </div>
        </div>
    )
}

export default About;

