import React from 'react';
// import '../Stylefiles/Couplevideos.css'
import Property from "./Videodata.js";
import CoupleCard from "./Couplecard";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import video from "../images/video.mp4"

function createCard(Property){
    return(
        <CoupleCard
        cardvid={Property.cardvid}
        cardhead={Property.cardhead}
        cardtext={Property.cardtext}
        />
    );
}

function Couplevideos(){
    return(
        <div className='c-vid-section'>
            <div className='c-video'>
                <h2 className='heading_secondary u-center-text u-margin-bottom-medium'>heading</h2>
                <p>Indian Wedding Films have evolved from long, traditional and blow-by-blow accounts of the wedding to highly customised and thematic feature films of your wedding the way it deserves to be remembered.</p>
                <p>Indian Wedding Films have evolved from long, traditional and blow-by-blow accounts of the wedding to highly customised and thematic feature films of your wedding the way it deserves to be remembered.</p>
            </div>
            <div className='row vcards'>
                {Property.map(createCard)}
            </div>
        </div>
    );
}


export default Couplevideos;
