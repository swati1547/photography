import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'
import img1 from '../images/pre-wedding/prew-1.jpg'
// import img2 from '../images/pre-wedding/prew-2.jpg'
// import img3 from '../images/pre-wedding/prew-3.jpg'
// import img4 from '../images/pre-wedding/prew-4.jpg'
// import img5 from '../images/pre-wedding/prew-5.jpg'
// import img6 from '../images/pre-wedding/prew-6.jpg'
// import img7 from '../images/pre-wedding/prew-7.jpg'
// import img8 from '../images/pre-wedding/prew-8.jpg'
// import img9 from '../images/pre-wedding/prew-9.jpg'
// import img10 from '../images/pre-wedding/prew-10.jpg'
// import img11 from '../images/pre-wedding/prew-11.jpg'
// import img12 from '../images/pre-wedding/prew-12.jpg'
// import img13 from '../images/pre-wedding/prew-13.jpg'
// import img14 from '../images/pre-wedding/prew-14.jpg'
// import img15 from '../images/pre-wedding/prew-15.jpg'
// import img16 from '../images/pre-wedding/prew-16.jpg'
// import img17 from '../images/pre-wedding/prew-17.jpg'
// import img18 from '../images/pre-wedding/prew-18.jpg'
// import img19 from '../images/pre-wedding/prew-19.jpg'
// import img20 from '../images/pre-wedding/prew-20.jpg'
// import img21 from '../images/pre-wedding/prew-21.jpg'
// import img22 from '../images/pre-wedding/prew-22.jpg'
// import img23 from '../images/pre-wedding/prew-23.jpg'
// import img24 from '../images/pre-wedding/prew-24.jpg'
// import img25 from '../images/pre-wedding/prew-25.jpg'
// import img26 from '../images/pre-wedding/prew-26.jpg'
// import img27 from '../images/pre-wedding/prew-27.jpg'
// import img28 from '../images/pre-wedding/prew-28.jpg'
// import img29 from '../images/pre-wedding/prew-29.jpg'
// import img30 from '../images/pre-wedding/prew-30.jpg'
// import img31 from '../images/pre-wedding/prew-31.jpg'
// import img32 from '../images/pre-wedding/prew-32.jpg'
// import img33 from '../images/pre-wedding/prew-33.jpg'

const images = [
    (img1),
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
    // (img15),
    // (img16),
    // (img17),
    // (img18),
    // (img19),
    // (img20),
    // (img21),
    // (img22),
    // (img23),
    // (img24),
    // (img25),
    // (img26),
    // (img27),
    // (img28),
    // (img29),
    // (img30),
    // (img31),
    // (img32),
    // (img33),
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

export default Prewedding;
