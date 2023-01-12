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
import Follow from './Follow'
import Piccarousel from './carousel'
import Image from './Image'
import Icons from './Icons'
import Sharebtn from './sharebtn';
import GoTOTop from './gototop';


function Mainpage(){
    return(
        <div>
            {Icons()}
            {Sharebtn()}
            {GoTOTop()}
            {Navbar1()}
            {Header()}
            {About()}
            {Services()}
            {SecCel()}
            {Piccarousel()}
            {Image()}
            {Video()}
            {Follow()}
            {Testimonial()}
            {Footer()}
            
        </div>
)
}
    
export default Mainpage;