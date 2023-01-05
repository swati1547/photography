import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'
// import img1 from '../images/celebrity/cel-1.jpg'
// import img2 from '../images/celebrity/cel-2.jpg'
// import img3 from '../images/celebrity/cel-3.jpg'
// import img4 from '../images/celebrity/cel-4.jpg'
// import img5 from '../images/celebrity/cel-5.jpg'
// import img6 from '../images/celebrity/cel-6.jpg'
// import img7 from '../images/celebrity/cel-7.JPG'
// import img8 from '../images/celebrity/cel-8.jpg'
// import img9 from '../images/celebrity/cel-9.jpg'
// import img10 from '../images/celebrity/cel-10.jpg'
// import img11 from '../images/celebrity/cel-11.jpg'
// import img12 from '../images/celebrity/cel-12.jpg'
// import img13 from '../images/celebrity/cel-13.jpg'
// import img14 from '../images/celebrity/cel-14.jpg'


const images = [
    // (img1),
    // (img2),
    // (img3),
    // (img4),
    // (img5),
    // (img6),
    // (img7),
    // (img8),
    // (img9),
    // (img10),
    // (img11),
    // (img12),
    // (img13),
    // (img14),
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
                    <img src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}} />
                    <button onClick={()=>imgAction('next-img')} className='background__next-btn'>
                        <VscChevronRight strock-width='0.3' className='background__icon'/>
                    </button>
                    </div>
            }
            <div className='gallery-block'>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='10px'>
                    {images.map((image, i) => (
                        <img className='gallery-block__images'
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
