import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'

const images = [
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-1_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-2_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-3_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-4_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-5_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-8_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-9_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-10_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-11_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-13_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-14_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-15_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-16_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-17_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-18_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-19_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-22_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-23_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-24_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-25_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-26_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-27_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-28_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-29_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-30_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-33_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-35_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-36_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-38_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-39_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-40_11zon.jpeg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-42.jpg',
'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Fashion/fash-43_11zon.jpeg',
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
