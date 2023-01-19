import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'

const images = [
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f1.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f2.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f3.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f4.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f5.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f6.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f7.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f34.jpg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f8.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f9.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f11.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f12.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f35.jpg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f13.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f10.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f14.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f15.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f16.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f17.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f18.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f19.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f20.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f21.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f22.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f23.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f24.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f25.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f27.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f28.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f29.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f30.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f26.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f31.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f32.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/f33.jpeg',
]

const Fashion = () => {

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
        <div className='gallery-main'>
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

export default Fashion;
