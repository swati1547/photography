import React from 'react';
import Service from "./Card-service.js";
import Card from "./Card.jsx";

function createCard(Service){
    return(
        <Card
        cardtext={Service.cardtext}
        />
    );
}

function Cards(){
    return(
        <div className='row ser-card-group'>
            <div className=''>
            {Service.map(createCard)}
            </div>
        </div>
    );
}

export default Cards;