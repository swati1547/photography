import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import cel1 from '../images/cel-1.jpg'
import cel2 from '../images/cel-2.jpg'
import cel3 from '../images/cel-3.JPG'

function SecCel(){
    return(
        <div className='section-celebrity'>
            <h1 className='u-center-text heading_secondary u-margin-bottom-large'>celebrity shoot</h1>
            <div >
                <div className='row cel-block'>
                    <div className='cel-div col-lg-4'>
                    <Card className='cel-card'>
                            <Card.Body className='cel-card__para'>
                                <Card.Title className='heading-tertiory'>hardik joshi</Card.Title>
                                <Card.Text className='cel-card__paragraph'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum
                                </Card.Text>
                            </Card.Body>
                            <div className='cel-card__img-sec'>
                                <img className='cel-card__img' src={cel1}></img>
                            </div>
                            
                    </Card>
                    </div>

                    <div className='cel-div col-lg-4'>
                    <Card className='cel-card'>
                        <Card.Body className='cel-card__para'>
                            <Card.Title className='heading-tertiory'>manjiri oak</Card.Title>
                            <Card.Text className='cel-card__paragraph'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                            </Card.Text>
                        </Card.Body>
                        <div className='cel-card__img-sec'>
                            <img className='cel-card__img' src={cel2}></img>
                        </div>
                    </Card>
                    </div>


                    <div className='cel-div col-lg-4'>
                    <Card className='cel-card'>
                        <Card.Body className='cel-card__para'>
                            <Card.Title className='heading-tertiory'>nilesh garje</Card.Title>
                            <Card.Text className='cel-card__paragraph'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Card.Text>
                        </Card.Body>
                        <div className='cel-card__img-sec'>
                            <img className='cel-card__img' src={cel3}></img>
                        </div>
                    </Card>
                    </div>
                </div>
            </div>

                <div className='button-div u-margin-top-huge'>
                    <button className='button'>
                        <span>
                        <Link className='btn-link' to='/img-gallery'>See all images</Link>
                        </span>
                    </button>
                </div>

        </div>
    )
}

export default SecCel;