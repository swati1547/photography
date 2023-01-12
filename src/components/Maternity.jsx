import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {VscChromeClose, VscChevronLeft, VscChevronRight} from 'react-icons/vsc'
import img1 from '../images/Maternity/mat-1.jpg'
// import img2 from '../images/Maternity/mat-2.jpg'
// import img3 from '../images/Maternity/mat-3.jpg'
// import img4 from '../images/Maternity/mat-4.jpg'
// import img5 from '../images/Maternity/mat-5.jpg'
// import img6 from '../images/Maternity/mat-6.jpg'
// import img7 from '../images/Maternity/mat-7.jpg'
// import img8 from '../images/Maternity/mat-8.jpg'
// import img9 from '../images/Maternity/mat-9.jpg'
// import img10 from '../images/Maternity/mat-10.jpg'
// import img11 from '../images/Maternity/mat-11.jpg'
// import img12 from '../images/Maternity/mat-12.jpg'
// import img13 from '../images/Maternity/mat-13.jpg'
// import img14 from '../images/Maternity/mat-14.jpg'
// import img15 from '../images/Maternity/mat-15.jpg'
// import img16 from '../images/Maternity/mat-16.jpg'
// import img17 from '../images/Maternity/mat-17.jpg'
// import img18 from '../images/Maternity/mat-18.jpg'
// import img19 from '../images/Maternity/mat-19.jpg'
// import img20 from '../images/Maternity/mat-20.jpg'
// import img21 from '../images/Maternity/mat-21.jpg'
// import img22 from '../images/Maternity/mat-22.jpg'
// import img23 from '../images/Maternity/mat-23.jpg'
// import img24 from '../images/Maternity/mat-24.jpg'
// import img25 from '../images/Maternity/mat-25.jpg'
// import img26 from '../images/Maternity/mat-26.jpg'
// import img27 from '../images/Maternity/mat-27.jpg'
// import img28 from '../images/Maternity/mat-28.jpg'
// import img29 from '../images/Maternity/mat-29.jpg'
// import img30 from '../images/Maternity/mat-30.jpg'
// import img31 from '../images/Maternity/mat-31.jpg'
// import img32 from '../images/Maternity/mat-32.JPG'
// import img33 from '../images/Maternity/mat-33.jpg'
// import img34 from '../images/Maternity/mat-34.jpg'
// import img35 from '../images/Maternity/mat-35.jpg'
// import img33 from '../images/Maternity/mat-33.jpg'
// import img33 from '../images/Maternity/mat-33.jpg'

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
    // (img34),
    // (img35),

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
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
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
