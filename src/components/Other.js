import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'



const images = [
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-1_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-2_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-3_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-4_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-5_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-6_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-7_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-8_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-9_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-11_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-12_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-13_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-15_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-31_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-16_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-34_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-35_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-36_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-26_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-27_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-28_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-17_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-18_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-19_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-22_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-21_11zon.jpeg',    
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-29_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-30_11zon.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-39.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/oth-38_11zon.jpeg',
]

const Other = () => {

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

export default Other;
