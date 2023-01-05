import React from 'react';
import Card from 'react-bootstrap/Card';
// import video from "../images/video.mp4"

function CoupleCard(props){
    return(
        <div className='col-lg-6 vcards__card'> 
                <Card className='c-card'>
                    <div className='c-card__videosection'>
                    <iframe className='c-card__videosection__video' src={props.cardvid} 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                    <Card.Body className='c-card__body'>

                        <Card.Title className='c-card__title u-margin-top-small'>{props.cardhead}</Card.Title>
                        <Card.Text className='c-card__text'>
                        {props.cardtext}
                        </Card.Text>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default CoupleCard;