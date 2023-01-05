import React from 'react';
import Navbar1 from './Navbar1'
import Footer from './Footer'
import TandC from '../images/T&C.pdf'

function Pricing(){
    return(
        <div>
            <Navbar1/>
            <div className='Pricing-section'>
                <h1 className='heading_secondary u-center-text price-head'>Pricing & Packages</h1>
                <p className='price-para'>Since every wedding is different, it’s not possible to give an outright quote without 
                    understanding the details & requirements.
                    <br/>
                    However, a tentative range of price we work on is as follows:
                </p>
                <div className='price-plans'>
                    <div className='price-format'>
                        <h3 className='plan-head'> Pre-wedding </h3>
                        <p className='plan-para'>Photoshoot, Video shoot</p>
                        <p className='plan-para'>Edited photo + video song</p>
                        <p className='plan-para'>1 Day - Amount-40,000/-</p>
                        <p className='plan-para'>2 Days - Amount-75,000/-</p>
                    </div>

                    <div className='price-format'>
                        <h3 className='plan-head'> Wedding photography & videography</h3>
                        <p className='plan-para'> Haldi </p>
                        <p className='plan-para'>1 candid photographer</p>
                        <p className='plan-para'>1 regular photographer</p>
                        <p className='plan-para'>1 regular videographer</p>
                        <p className='plan-para'>Wedding </p>
                        <p className='plan-para'>1 candid photographer</p>
                        <p className='plan-para'>1 regular photographer </p>
                        <p className='plan-para'>1 regular videographer </p>
                        <p className='plan-para'>Traditional video </p>
                        <p className='plan-para'>1 hilight song + full event video cd or pd. </p>
                        <p className='plan-para'> Amount  -  45,000/-</p>
                    </div>

                    <div className='price-format'>
                        <h3 className='plan-head'>Album</h3>
                        <p className='plan-para'>1 NT photobook album 12x36 size,  30 sheets, + mini album + ebook card +bag + table calendar.</p>
                        <p className='plan-para'>Amount -10,000/-</p>
                        {/* <p className='plan-para'>asdf sdfgh sdfghj - *79464</p> */}
                    </div>

                    <div className='price-format'>
                        <h3 className='plan-head'>Cinematography</h3>
                        <p className='plan-para'>1 cinematographer(14,000/day)</p>
                        <p className='plan-para'>Duration of video ( 10 to 18 minutes wedding story , and  treller one song) </p>
                        <p className='plan-para'>Amount - 28,000/-</p>
                    </div>
                </div>
        
                <div className='points-sec'>
                <h2 className='heading-tertiory'>Our Wedding Packages Include:</h2>
                <ul>
                    <li>Candid Photography by Award-Winning Photographers</li>
                    <li>Creative Wedding Filming</li>
                    <li>All events' coverage</li>
                    <li>Bride AND Groom's side coverage</li>
                    <li>300-500 high resolution wedding photographs per day of photography</li>
                    <li>3-5 minute wedding film teaser / trailer</li>
                    <li>30-40 min fullHD story based wedding film</li>
                    <li>Online gallery of your wedding photos</li>
                </ul>
                </div>

                <div className='tc-button_div'>
                    <div className='tc-button u-margin-top-huge'>
                        <p>
                            For more detailed information about princing packages & terms & condition 
                            for different shoots please download pdf below:
                        </p>
                        <button className='tc-button_btn'>
                                <a className='tc-button_text' href={TandC} download="downloaded">T&C</a>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )  
}  

export default Pricing;

