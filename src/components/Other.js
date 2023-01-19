import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'

const images = [
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o1.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o2.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o3.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o4.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o5.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o6.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o7.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o8.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o9.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o17.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o16.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o18.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o21.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o22.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o23.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o27.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o28.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o29.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o33.jpg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o10.jpeg',    
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o12.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o26.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o13.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o19.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o15.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o24.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o31.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o25.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o30.jpeg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o32.jpg',
    'https://nilgrjebucket.s3.ap-south-1.amazonaws.com/images/other/o20.jpeg',
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
