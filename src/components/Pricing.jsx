import React from 'react';
import Navbar1 from './Navbar1'
import Footer from './Footer'
// import "../Stylefiles/Pricing.css";
import TandC from '../images/T&C.pdf'

function Pricing(){
    return(
        <div>
            <Navbar1/>
            <div className='Pricing-section'>
                <h1 className='heading_secondary u-center-text u-margin-bottom-large'>Pricing & Packages</h1>
                <p className='price-para'>Since every wedding is different, it’s not possible to give an outright quote without 
                understanding the details & requirements.
                <br/><br/>
                However, a tentative range of price we work on is as follows:</p>
                <div className='price-plans'>
                    <div className='price-format'>
                        <h3 className='plan-head'>1 Day Pre-Wedding</h3>
                        <p className='plan-para'>INR 60,000 – 1,25,000</p>
                    </div>
                    <div className='price-format'>
                        <h3 className='plan-head'>Wedding</h3>
                        <p className='plan-para'>1 Day Wedding – INR 1,00,000 – 2,50,000</p>
                        <p className='plan-para'>2 Day Weddings – INR 2,00,000 – 4,50,000</p>
                        <p className='plan-para'>3 Day Weddings – INR 3,00,000 – 6,50,000</p>
                    </div>
                    <div className='price-format'>
                        <h3 className='plan-head'>wertyu</h3>
                        <p className='plan-para'>asdfghjkl-sdfgh75</p>
                        <p className='plan-para'>wertyui-7862852</p>
                        <p className='plan-para'>asdf sdfgh sdfghj - *79464</p>
                    </div>
                </div>
        
                <div className='points-sec'>
                <h3>Our Wedding Packages Include:</h3>
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
            </div>
            <a href={TandC} download="downloaded">
  <h1 src={TandC} alt="W3Schools" width="104" height="142">T&C</h1>
</a>
            <Footer/>
        </div>
    )  
}  

export default Pricing;

