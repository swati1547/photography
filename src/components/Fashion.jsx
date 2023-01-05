import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'
// import img1 from '../images/Fashion/fash-1.jpg'
// import img2 from '../images/Fashion/fash-2.jpg'
// import img3 from '../images/Fashion/fash-3.jpg'
// import img4 from '../images/Fashion/fash-4.jpg'
// import img5 from '../images/Fashion/fash-5.jpg'
// import img6 from '../images/Fashion/fash-6.jpg'
// import img7 from '../images/Fashion/fash-7.jpg'
// import img8 from '../images/Fashion/fash-8.jpg'
// import img9 from '../images/Fashion/fash-9.jpg'
// import img10 from '../images/Fashion/fash-10.jpg'
// import img11 from '../images/Fashion/fash-11.jpg'
// import img12 from '../images/Fashion/fash-12.jpg'
// import img13 from '../images/Fashion/fash-13.jpg'
// import img14 from '../images/Fashion/fash-14.jpg'
// import img15 from '../images/Fashion/fash-15.jpg'
// import img16 from '../images/Fashion/fash-16.jpg'
// import img17 from '../images/Fashion/fash-17.jpg'
// import img18 from '../images/Fashion/fash-18.jpg'
// import img19 from '../images/Fashion/fash-19.jpg'
// import img20 from '../images/Fashion/fash-20.jpg'
// import img21 from '../images/Fashion/fash-21.jpg'
// import img22 from '../images/Fashion/fash-22.jpg'
// import img23 from '../images/Fashion/fash-23.jpg'
// import img24 from '../images/Fashion/fash-24.jpg'
// import img25 from '../images/Fashion/fash-25.jpg'
// import img26 from '../images/Fashion/fash-26.jpg'
// import img27 from '../images/Fashion/fash-27.jpg'
// import img28 from '../images/Fashion/fash-28.jpg'
// import img29 from '../images/Fashion/fash-29.jpg'
// import img30 from '../images/Fashion/fash-30.jpg'
// import img31 from '../images/Fashion/fash-31.jpg'
// import img32 from '../images/Fashion/fash-32.jpg'
// import img33 from '../images/Fashion/fash-33.jpg'
// import img34 from '../images/Fashion/fash-34.jpg'
// import img35 from '../images/Fashion/fash-35.jpg'
// import img36 from '../images/Fashion/fash-36.jpg'
// import img37 from '../images/Fashion/fash-37.jpg'
// import img38 from '../images/Fashion/fash-38.jpg'
// import img39 from '../images/Fashion/fash-39.jpg'
// import img40 from '../images/Fashion/fash-40.jpg'
// import img41 from '../images/Fashion/fash-41.jpg'
// import img42 from '../images/Fashion/fash-42.jpg'
// import img43 from '../images/Fashion/fash-43.jpg'
// import img44 from '../images/Fashion/fash-44.jpg'
// import img45 from '../images/Fashion/fash-45.jpg'
// import img46 from '../images/Fashion/fash-46.jpg'
// import img47 from '../images/Fashion/fash-47.jpg'
// import img48 from '../images/Fashion/fash-48.jpg'
// import img49 from '../images/Fashion/fash-49.jpg'
// import img50 from '../images/Fashion/fash-50.jpg'

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
    // (img34),
    // (img35),
    // (img36),
    // (img37),
    // (img38),
    // (img39),
    // (img40),
    // (img41),
    // (img42),
    // (img43),
    // (img44),
    // (img45),
    // (img46),
    // (img47),
    // (img48),
    // (img49),

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
                    <img src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}} />
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
