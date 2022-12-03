import React from 'react';
// import "../Stylefiles/m&kids.css";
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsPlus, BsCircle } from "react-icons/bs";
import {GiCircle} from "react-icons/gi"



function Kids(){
    return(
        <div>
        <div className='kids-sec'>
        <div className='photo-sec-para'>
                <p>React Carousel is a slideshow inside a bunch of content. 
                    It launches many images, text, or HTML elements and supports previous/next buttons.
                </p>
                <p>The Page Visibility API is cross-browser compatible and prevents carousel scrolling when 
                    the user is not viewing a webpage such as when the browser tab is inactive, the browser 
                    window is minimized, etc
                </p>
            </div>
        <Container>
            <Row>
                <Col className='image mk-ver-img'>
                    <div className='overlay1'>
                        <BsPlus className='plus'/>
                        <div className='overlay2'>
                            <GiCircle className='circle'/>
                        </div>
                    </div>
                </Col>
                <Col className='column2' xs={6}>
                    <Row className='roww1 mk-roww image'>
                    <div className='overlay1'>
                        <BsPlus className='plus'/>
                        <div className='overlay2'>
                            <GiCircle className='circle'/>
                        </div>
                    </div>
                    </Row>
                    <Row className='roww2 mk-roww image' xs={5}>
                    <div className='overlay1'>
                        <BsPlus className='plus'/>
                        <div className='overlay2'>
                        <i class="fa-thin fa-circle"></i>
                        </div>
                    </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
            
        </div>
        {Footer()}
        </div>
    )
}

export default Kids;
