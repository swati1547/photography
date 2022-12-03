import React,{useState} from 'react';
import '../Stylefiles/Responsive.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { FaBlackTie } from 'react-icons/fa';
import photo1 from "../images/pic1.jpg"
import photo2 from "../images/pic2.jpg"
import photo3 from "../images/pic3.jpg"
import photo5 from "../images/pic5.jpg"
import photo6 from "../images/pic6.jpg"
import photo7 from "../images/pic7.jpg"
import photo8 from "../images/pic8.jpg"
import photo9 from "../images/pic9.jpg"
import photo10 from "../images/pic27.JPG"
import photo11 from "../images/pic26.JPG"
import photo12 from "../images/pic25.JPG"
import photo13 from "../images/pic24.JPG"
import photo14 from "../images/pic23.JPG"

const images = [
    (photo1),
    (photo2),
    (photo3),
    (photo6),
    (photo7),
    (photo8),
    (photo9),
    (photo10),
    (photo12),
    (photo13),
    (photo14),
    (photo11),
]


const Gallery2=()=>{

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
                    <Masonry gutter='10px'>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{width: "100%", display: "block"}}
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

export default Gallery2;
