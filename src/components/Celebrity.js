import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'


const images = [
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c1.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c2.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c3.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c4.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c5.jpg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c6.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c7.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c8.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c9.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c10.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c11.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c12.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/celebrity/c13.jpeg',
]

const Celebrity = () => {

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

export default Celebrity;
