import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'


const images = [
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m1.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m2.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m3.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m4.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m5.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m6.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m7.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m8.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m9.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m10.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m11.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m12.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m13.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m14.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m15.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m16.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m17.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m18.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m19.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m20.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m21.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m22.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m23.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m24.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m25.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m26.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m27.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m29.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m28.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m30.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m31.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/Maternity/m32.jpeg',
]

const Maternity = () => {

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

export default Maternity;
