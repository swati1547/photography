import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'


const images = [
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p10.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p11.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p12.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p13.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p14.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p15.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p16.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p17.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p18.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p19.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p20.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p21.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p22.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p23.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p24.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p25.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p26.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p27.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p28.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p29.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p30.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p31.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p32.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p33.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p34.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p35.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p36.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p37.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p38.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p39.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/pre-wedding/p40.jpeg',
]

const Prewedding = () => {

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
        
    )
}

export default Prewedding;
