import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'


const images = [
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w10.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w11.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w12.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w13.jpeg',  
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w15.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w14.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w16.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w17.jpg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w18.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w20.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w21.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w22.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w23.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w24.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w25.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w31.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w32.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w33.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w34.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w35.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w36.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w26.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w27.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w28.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w37.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w39.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w41.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w38.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w30.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w40.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w19.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w29.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w42.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w43.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w44.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w45.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w46.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w47.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w48.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w49.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w50.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w52.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w53.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w54.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w55.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/w51.jpeg',
]

const Wedding = () => {

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
        <div>
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
            <div className='gallery-block'>
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
        </div>
        
    )
}

export default Wedding;
