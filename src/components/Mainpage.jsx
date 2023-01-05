import React from 'react';
import '../Stylefiles/Main.css'
import Navbar1 from "./Navbar1";
import Header from "./Header";
import Services from "./Services";
import SecCel from './secelebrity'
import About from "./About.jsx";
import Testimonial from "./Testimonial";
import Footer from './Footer';
import Video from './Video';
// import Piccarousel from './carousel'
import Icons from './Icons'
// import Sharebtn from './sharebtn';
// import GoTOTop from './gototop';


function Mainpage(){
    return(
        <div>
            {/* {Sharebtn()} */}
            {/* {GoTOTop()} */}
            {Navbar1()}
            {Header()}
            {Icons()}
            {About()}
            {Services()}
            {SecCel()}
            {/* {Piccarousel()} */}
            {Video()}
            {Testimonial()}
            {Footer()}
            
        </div>
)
}
    
export default Mainpage;