import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import cel1 from '../images/cel-1.jpg'
import cel2 from '../images/cel-2.jpg'
import cel3 from '../images/cel-3.JPG'
import u_tube from '../images/you-tube.png'

function SecCel(){
    return(
        <div className='section-celebrity'>
        <h2 className='u-center-text u-margin-bottom-large back-head'>Celebrities</h2>
            <h1 className='u-center-text heading_secondary u-margin-bottom-large'>celebrity shoot</h1>
            <div >
                <div className='row cel-block'>
                    <div className='cel-div col-lg-4'>
                    <Card className='cel-card'>
                            <Card.Body className='cel-card__para'>
                                <Card.Title className='heading-tertiory'>hardik joshi</Card.Title>
                                <Card.Text className='cel-card__paragraph'>
                                    Hardik joshi as celebrity guest at 'Miss sparcle' show organised 
                                    by Yuga foundation.
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
                            manjiri oak name given to nath, her shoot with manjiri Nath on occasion of makarsankrat.
                            &emsp;&emsp;<span className='you-tube-logo__text'>click here</span>&rarr;
                                <a href='https://youtu.be/CuBb0W7Lxew'><img className='you-tube-logo' src={u_tube}></img></a>
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
                            <Card.Title className='heading-tertiory'>nandita patkar</Card.Title>
                            <Card.Text className='cel-card__paragraph'>
                                Nandita patkar's shoot at Fairview Lake Mulshi, Pune.
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