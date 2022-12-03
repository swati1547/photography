import React,{useState} from 'react';
import '../Stylefiles/Responsive.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { FaBlackTie } from 'react-icons/fa';
import { BsPlus, BsCircle } from "react-icons/bs";
import {GiCircle} from "react-icons/gi"

const images = [
    "https://picsum.photos/100/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/400",
    "https://picsum.photos/400/300",
    "https://picsum.photos/300/200",
    "https://picsum.photos/200/100",
    "https://picsum.photos/200/200",
    "https://picsum.photos/300/300",
    "https://picsum.photos/100/100",
    "https://picsum.photos/400/400",
    "https://picsum.photos/300/300",
    "https://picsum.photos/100/100",
    "https://picsum.photos/400/400",
]


const Responsivegallery=()=>{

const[data, setData] = useState({img: '', i:0})

const viewImage = (img, i) =>{
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
            {
                data.img &&
                <div style={{
                    width:'100%',
                    height:'100vh',
                    background: 'black',
                    position: 'fixed',
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    overflow:'hidden',
                }}>
                <button onClick={()=>imgAction()} style={{position:'absolute', top:0, right:'10px'}}>X</button>
                <button onClick={()=>imgAction('previous-img')}>Previous</button>
                <img src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}} />
                <button onClick={()=>imgAction('next-img')}>next</button>
                </div>
            }
        <div className='responsive'>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                            onClick={()=>viewImage(image, i)}
                        ><div className='overlay1'>
                        <BsPlus className='plus'/>
                        <div className='overlay2'>
                            <GiCircle className='circle'/>
                        </div>
                    </div></img>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        </div>
    )
}

export default Responsivegallery;
