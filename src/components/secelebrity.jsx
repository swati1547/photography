import React from 'react';
// import "../Stylefiles/SecCel.css";
import Card from 'react-bootstrap/Card';
import celpic1 from '../images/nil1.jpg'
import { Link } from "react-router-dom"

function SecCel(){
    return(
        <div className='section-celebrity'>
            <h1 className='u-center-text heading_secondary u-margin-bottom-large'>celebrity shoot</h1>
                <div className='row'>
                    <div className='cel-div'>
                    <Card className='cel-card'>
                            <Card.Body className='cel-card__para'>
                                <Card.Title className='heading-tertiory cel-card__head'>amol garje</Card.Title>
                                <Card.Text className='cel-card__paragraph paragraph'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum
                                </Card.Text>
                            </Card.Body>
                            <div className='cel-card__img-sec'>
                                <img className='cel-card__img' src={celpic1}></img>
                            </div>
                            
                    </Card>
                    </div>

                    <div className='cel-div'>
                <Card className='cel-card'>
                    <Card.Body className='cel-card__paragraph cel-card__para'>
                        <Card.Title className='heading-tertiory'>ganesh garje</Card.Title>
                        <Card.Text className='paragraph'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's
                        </Card.Text>
                    </Card.Body>
                    <div className='cel-card__img-sec'>
                                <img className='cel-card__img' src={celpic1}></img>
                            </div>
                </Card>
                </div>


                <div className='cel-div'>
                <Card className='cel-card'>
                    <Card.Body className='cel-card__para'>
                        <Card.Title className='heading-tertiory'>nilesh garje</Card.Title>
                        <Card.Text className='cel-card__paragraph paragraph'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Card.Text>
                    </Card.Body>
                    <div className='cel-card__img-sec'>
                                <img className='cel-card__img' src={celpic1}></img>
                            </div>
                </Card>
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
