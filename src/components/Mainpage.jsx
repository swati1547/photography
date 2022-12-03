import React from 'react';
import '../Stylefiles/Main.css'
import Navbar1 from "./Navbar1";
import Header from "./Header";
import Services from "./Services";
import SecCel from './secelebrity'
import About from "./About.jsx";
import Gallery from "./Gallery.jsx";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Footer from './Footer';
import Video from './Video';
import Responsivegallery from './Responsivegallery'
import Piccarousel from './carousel'
import Gallery2 from './gallery2'
import Libme from './Lib&me'
import Icons from './Icons'
import ImagesList from './ImageList.js'


function Mainpage(){
    return(
        <div>
            {Navbar1()}
            {Header()}
            {Icons()}
            {About()}
            {Services()}
            {SecCel()}
            {Piccarousel()}
            {Gallery()}
            {Video()}
            {Testimonial()}
            {Footer()}
            {/* {Responsivegallery()} */}
            {Gallery2()}
            {Libme()}
            {ImagesList()}
            
        </div>
)
}
    
export default Mainpage;