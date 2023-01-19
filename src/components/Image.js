import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'
import { Link } from "react-router-dom"


const images = [
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p21.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w22.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w19.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p25.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w13.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w17.jpg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w29.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m9.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m4.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/kids/k7.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/kids/k17.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m17.jpeg',
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
                            <img className='gallery-block__images image'
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
            <div className='button-div u-margin-top-huge'>
                <p>For more images</p>
                <button className='button'>
                    <span>
                    <Link className='btn-link' to='/img-gallery'>Go To Gallery</Link>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Image;
