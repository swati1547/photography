import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../images/test-1.jpeg";
import pic2 from "../images/test-2.jpeg";
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'


function Testimonial(){

    return(
        <div className='review-carousel-section'>

<div className='testimonial-heading'>
<h2 className='heading_secondary u-center-text testimonial-heading__text'>testimonial</h2>
</div>

<Carousel variant="dark">
      <Carousel.Item>
      <div className='row re-carousel'>
                <div className='re-carousel__pic-sec'>
                    <img className='re-carousel__pic' src={pic1} alt=''></img>
                    <h3 className='heading-tertiory re-carousel__shoot-name'>maternity</h3>
                </div>
                <div className='re-carousel__review-sec'>
                    <div className='re-carousel__only-review'>
                        <ImQuotesLeft className='re-carousel__icon-left'/>
                        <p className='re-carousel__review'>
                            Having a great knowledge about photography, gives ample 
                            of time to photograph any pic and give you instant photos.
                        </p>
                        <ImQuotesRight className='re-carousel__icon-right'/>
                    </div>
                        <p className='re-carousel__name'>-Tejas Hazare</p>
                </div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row re-carousel'>
                <div className='re-carousel__pic-sec'>
                    <img className='re-carousel__pic' src={pic2} alt=''></img>
                    <h3 className='heading-tertiory re-carousel__shoot-name'>wedding</h3>
                </div>
                <div className='re-carousel__review-sec'>
                <div className='re-carousel__only-review'>
                <ImQuotesLeft className='re-carousel__icon-left'/>
                    <p className='re-carousel__review'>The best photographers team I have ever seen. 
                    I gave them my wedding photography contract, 
                    they nailed it and many of my friends given them Different events contract like baby shower, 
                    birthday, corporate event etc. you can blindly trust them and they will make your event even more beautiful...
                    </p>
                    <ImQuotesRight className='re-carousel__icon-right'/>
                    </div>
                    <p className='re-carousel__name'>-Chaitali Barde</p>
                </div>
            </div>
      </Carousel.Item>
      {/* <Carousel.Item>
      <div className='row re-carousel'>
                <div className='re-carousel__pic-sec'>
                    <img className='re-carousel__pic' src={pic}></img>
                    <h3 className='heading-tertiory re-carousel__shoot-name'>wedding</h3>
                </div>
                <div className='re-carousel__review-sec'>
                <div className='re-carousel__only-review'>
                <ImQuotesLeft className='re-carousel__icon-left'/>
                    <p className='re-carousel__review'>Photography for all type of events. Single photographer or team of professional 
                            photographers available as need or order.
                    </p>
                    <ImQuotesRight className='re-carousel__icon-right'/>
                    </div>
                    <p className='re-carousel__name'>-swati garje</p>
                </div>
            </div>
      </Carousel.Item> */}
    </Carousel>

        </div>
    )
}

export default Testimonial;

