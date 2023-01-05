import React from 'react';

function Card(props){
    return(
        <div className='col-sm-12 col-md-6 col-lg-4 ser-card-block'>
        <div className='service-box'>
        
            <div className='ser-card-body'>
                {/* <FaIcons className='service-box__icon'/> */}
                <h5 className='card-icon'>{props.icon}</h5>
                <p className='ser-card-text'>{props.cardtext}</p>
            </div> 
        </div>
        </div>
)
}

{/* <img className='card-img-top' 
                src="../images/back_camera.jpg" alt="Card image">
                </img> */}
export default Card;

