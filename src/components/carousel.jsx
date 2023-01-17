import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../images/media/car-1.jpeg'
import pic2 from '../images/media/car-2.jpeg'
import pic3 from '../images/media/car-3.jpeg'
import pic4 from '../images/media/car-4.jpeg'
import pic5 from '../images/media/car-5.jpeg'
import pic6 from '../images/media/car-6.jpeg'
import pic7 from '../images/media/car-7.jpeg'

function Piccarousel(){
    return(

        <div className='carousel-section'>
          <Carousel fade>


            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic1}
                  alt="First slide"
                />
                <p className='carousel_text carousel_text__pre_wed'>Pre-wedding photographer</p>
              </div>  
            </Carousel.Item>

            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic2}
                  alt="First slide"
                />
                <p className='carousel_text carousel_text__wed'>Wedding photographer</p>
                </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic3}
                  alt="First slide"
                />
                <p className='carousel_text carousel_text__maternity'>Maternity photographer</p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic4}
                  alt="First slide"
                />
                <p className='carousel_text carousel_text__kid'>Kids photographer</p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic5}
                  alt="First slide"
                />
                <p className='carousel_text carousel_text__fashion'>Fashion Photographer</p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic6}
                  alt="First slide"
                />
                <p className='carousel_text carousel_text__celebrity'>Celebrity photographer</p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic7}
                  alt="First slide"
                />
                <p className='carousel_text carousel_text__event'>Event photographer</p>
              </div>
            </Carousel.Item>


          </Carousel> 


        </div>
    )
}

export default Piccarousel;
