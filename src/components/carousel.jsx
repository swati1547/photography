import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../images/media/car-1.jpg'
import pic2 from '../images/media/car-2.jpg'
import pic3 from '../images/media/car-3.jpg'
import pic4 from '../images/media/car-4.jpg'
import pic5 from '../images/media/car-5.jpg'
import pic6 from '../images/media/car-6.jpg'
// import pic4 from '../images/kids/kid-18.jpg'
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
              </div>
              {/* <Carousel.Caption  className='carouse__text'>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>



            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic2}
                  alt="First slide"
                />
              </div>
              {/* <Carousel.Caption className='carouse__text'>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>



            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic3}
                  alt="First slide"
                />
              </div>
              {/* <Carousel.Caption className='carouse__text'>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>



            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic4}
                  alt="First slide"
                />
              </div>
              {/* <Carousel.Caption className='carouse__text'>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic5}
                  alt="First slide"
                />
              </div>
              {/* <Carousel.Caption className='carouse__text'>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <div className='carousel__image'>
                <img
                  className="d-block w-100 carousel__image__img"
                  src={pic6}
                  alt="First slide"
                />
              </div>
              {/* <Carousel.Caption className='carouse__text'>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>


          </Carousel> 
        </div>
    )
}

export default Piccarousel;
