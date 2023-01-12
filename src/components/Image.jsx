import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'
import img1 from '../images/media/img-1.jpg'
import img2 from '../images/media/img-2.jpg'
import img3 from '../images/media/img-3.jpg'
import img4 from '../images/media/img-4.jpg'
import img5 from '../images/media/img-5.jpg'
import img6 from '../images/media/img-6.jpg'
import img7 from '../images/media/img-7.jpg'
import img8 from '../images/media/img-8.jpg'
import img9 from '../images/media/img-9.jpg'
import img10 from '../images/media/img-10.jpg'
import img11 from '../images/media/img-11.jpg'
import img12 from '../images/media/img-12.jpg'


const images = [
    (img1),
    (img2),
    (img3),
    (img4),
    (img5),
    (img6),
    (img7),
    (img8),
    (img9),
    (img10),
    (img11),
    (img12),
]

const Image = () => {

    const [data, setData] = useState({img: '', i: 0})

    const viewImage = (img, i) => {
        setData({img, i})
    }

    const imgAction = (action)=>{
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i + 1});
        }
        if(action === 'previous-img'){
            setData({img: images[i - 1], i: i - 1});
        }
        if(!action){
            setData({img: '', i: 0});
        }
    }

    return(
        <div className='section-image'>
            <div>
                <h2 className='u-center-text u-margin-bottom-large back-head'>My Passion</h2>
                <h2 className='heading_secondary u-center-text u-margin-bottom-large front-head'>Photo Gallery</h2>
            </div>
            <div>
                {data.img &&
                        <div className='background'>
                        <button onClick={()=>imgAction()} className='background__close-btn'>
                            <VscChromeClose strock-width='0.3' className='background__icon__close'/>
                        </button>
                        <button onClick={()=>imgAction('previous-img')} className='background__pre-btn'>
                            <VscChevronLeft strock-width='0.3' className='background__icon'/>
                        </button>
                        <img src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}}  alt=''/>
                        <button onClick={()=>imgAction('next-img')} className='background__next-btn'>
                            <VscChevronRight strock-width='0.3' className='background__icon'/>
                        </button>
                        </div>
                }
                <div className='gallery-block-front'>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{750: 2, 900: 3}}
                >
                    <Masonry gutter='10px'>
                        {images.map((image, i) => (
                            <img className='gallery-block__images'
                                key={i}
                                src={image}
                                alt=""
                                onClick={()=>viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                </div>
            </div>
        </div>
    )
}

export default Image;
