import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import coupple1 from "../images/couple1.jpg";
import coupple2 from "../images/couple2.jpg";
import coupple3 from "../images/couple3.jpg";
import pic from '../images/pic6.jpg'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'


function Testimonial(){

    return(
        <div className='review-carousel-section'>



<Carousel variant="dark">
      <Carousel.Item>
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
      </Carousel.Item>
      <Carousel.Item>
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
      </Carousel.Item>
      <Carousel.Item>
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
      </Carousel.Item>
    </Carousel>




            {/* <div className='row'>
                <div className='carousel__pic-sec'>
                    <img className='carousel__pic' src={pic}></img>
                    <h3 className='heading-tertiory carousel__shoot-name'>wedding</h3>
                </div>
                <div className='carousel__review-sec'>
                <div className='carousel__only-review'>
                <ImQuotesLeft className='carousel__icon-left'/>
                    <p className='carousel__review'>Photography for all type of events. Single photographer or team of professional 
                            photographers available as need or order.
                    </p>
                    <ImQuotesRight className='carousel__icon-right'/>
                    </div>
                    <p className='carousel__name'>-swati garje</p>
                </div>
            </div> */}
        </div>
    )
}

export default Testimonial;

