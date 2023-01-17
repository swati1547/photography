import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'


const images = [
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-1_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-2_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-5_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-7_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-8_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-9_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-10_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-11_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-12_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-13_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-14_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-15_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-17_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-18_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-19_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-29_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-28_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-30_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-33_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-49_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-31_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-22_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-23_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-24_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-25_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-26_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-27_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-44_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-41_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-42_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-46_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-45_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-43_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-51_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-52_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-53_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-34_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-35_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-38_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-37_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/wedding/wed-39_11zon.jpeg',
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
