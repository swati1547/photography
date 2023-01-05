import React from 'react';
import {BsCamera, BsCameraVideo, BsCameraReels} from "react-icons/bs"
import {BiPhotoAlbum} from "react-icons/bi"

function Services(){
    return(
        <div className='section-services'>
            <div className='row'>

                {/* photography card */}
                <div className='col-lg-3'>
                    <div className='service-box'>
                        <BsCamera className='service-box__icon'/>
                        <h4 className='heading-tertiory'>
                            photography
                        </h4>
                        <p className='service-box__text'>
                            Photography for all type of events. Single photographer or team of professional 
                            photographers available as need or order. 
                        </p>
                    </div> 
                </div>
                {/* photography card ends*/}

                {/* videography card */}
                <div className='col-lg-3'>
                    <div className='service-box'>
                        <BsCameraVideo className='service-box__icon'/>
                        <h4 className='heading-tertiory'>
                            videography
                        </h4>
                        <p className='service-box__text'>
                            Doing videography for couple shoot, traditional videos and for wedding. 
                            with well equipments and drone.
                        </p>
                    </div> 
                </div>
                {/* videography card ends*/}

                {/* cinematography card */}
                <div className='col-lg-3'>
                    <div className='service-box'>
                        <BsCameraReels className='service-box__icon'/>
                        <h4 className='heading-tertiory'>
                            cinematography
                        </h4>
                        <p className='service-box__text'>
                            we have done cinematography 
                        </p>
                    </div> 
                </div>
                {/* cinematography card ends */}

                {/* album card */}
                <div className='col-lg-3'>
                    <div className='service-box'>
                        <BiPhotoAlbum className='service-box__icon'/>
                        <h4 className='heading-tertiory'>
                            album
                        </h4>
                        <p className='service-box__text'>
                            Album service is also available with different sizes of album, page quantity and 
                            depending on type of shoot. 
                        </p>
                    </div> 
                </div>
                {/* album card ends */}

            </div>
        </div>
)
}

export default Services;

