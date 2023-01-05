import React from 'react';
import aboutpic from '../images/about-pic.jpeg'
import {NavLink} from "react-router-dom"

function About(){
    return(
        <div className='section-about'>

            <h2 className='heading_secondary u-center-text u-margin-bottom-large back-head'>about</h2>
            <h2 className='heading_secondary u-center-text u-margin-bottom-large front-head'>me</h2>

            <div className='row about-sec-block'>

                {/* about info section */}
                <div className='col-lg-6 about__text-sec'>

                    {/* first paragraph */}
                    <h3 className='heading-tertiory u-margin-bottom-small'>
                        Passionate photographer
                    </h3>
                    <p className='paragraph'>Hello, My name is Nilesh Garje, I’m a wedding photographer based
                    in Pune Attempting to capture honest & authentic moments in any event as maternity, babyshower, baby shoot, pre-wedding,
                        wedding, post wedding, fashion shoot, celebrity shoot, etc. <br/>
                        Service is available in all maharashtra.
                    </p>
                    {/* first paragraph ends */}

                    {/* second paragraph */}
                    <h3 className='heading-tertiory u-margin-bottom-small'>
                        model
                    </h3>
                    <p className='paragraph'>
                    Nil Garje here professional fashion model. 
                    I have organise 12 events as organiser.
                    Participanted in 15+ events as model. 
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
                    <img className='about-img' src={aboutpic} alt="image"/>
                </div>
                {/* about image section ends */}
                
            </div>
        </div>
    )
}

export default About;

