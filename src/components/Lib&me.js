import React,{useState} from 'react';
import "../Stylefiles/m&kids.css";
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsPlus, BsCircle } from "react-icons/bs";
import {GiCircle} from "react-icons/gi"



function Libme(){

    const[data, setData] = useState({img: '', i:0})


    const viewImage = (img, i) =>{
        setData({img, i})
    }


    // const imgAction = (action)=>{
    //     let i = data.i;
    //     if(action === 'next-img'){
    //         setData({img: images[i + 1], i: i + 1});
    //     }
    //     if(action === 'previous-img'){
    //         setData({img: images[i - 1], i: i - 1});
    //     }
    //     if(!action){
    //         setData({img: '', i: 0});
    //     }
    // }







    return(
        <div>
            {
                    data.img &&
                    <div style={{
                        width:'100%',
                        height:'100vh',
                        background: 'black',
                        position: 'fixed',
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        overflow:'hidden',
                    }}>
                    {/* <button onClick={()=>imgAction()} style={{position:'absolute', top:0, right:'10px'}}>X</button> */}
                    {/* <button onClick={()=>imgAction('previous-img')}>Previous</button> */}
                    {/* <img src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}} />
                    <button onClick={()=>imgAction('next-img')}>next</button> */}
                    </div>
                }
        <div className='kids-sec'>
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
                        <GiCircle className='circle'/>
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

export default Libme;
