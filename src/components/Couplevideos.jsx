import React from 'react';
import Property from "./Videodata.js";
import CoupleCard from "./Couplecard";

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
            <div className='row video-containing-div'>
                {Property.map(createCard)}
            </div>
        </div>
    );
}


export default Couplevideos;
