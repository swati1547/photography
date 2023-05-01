import React from 'react';
import mainpic from '../images/about-main.jpeg'
import Navbar1 from './Navbar1'
import photographer from '../images/photographer.jpeg'
import model from '../images/model-pic.jpeg'
import institute from '../images/institute-pic.jpeg'
import aboutbackground2 from '../images/about-img.jpeg'
import Footer from './Footer';

function Aboutme(){
    return(
        <div>
            <Navbar1/>
            <div className='about-background'>
                <img className='about-background__image' src={aboutbackground2} alt=''></img>
            </div>
                <div className='main-image'> 
                    <img className='main-image__pic' src={mainpic} alt=''></img>
                </div>
            <div className='about-page'>

            <div className='about-block'>
                <div className='about-me col-lg-6'>
                    <h2 className='heading-tertiory about-headings'>nilesh somnath garje</h2>
                    <p>I am Nil Garje wedding photographer, professional model the owner of Nil Garje 
                    Photography & Attitude Modelling institute based in Pune. I completed my post graduation 
                    MBA in marketing.<br/>
                    Many years ago I started clicking photos as a inherited hobby and skill from my father.
                    I gain interest in capturing special moments in someones life which makes very great
                    memories. then by dedication, passion and interest I improved my skills day by day to 
                    be a professional photographer.<br/>
                    Working as model in photography workshop is big lesson for me to grow my 
                    photography.
                    </p>
                </div>
            </div>

            <hr className='hr-about'/>

            <div className='about-block row'>
                <div className='photographer-div col-lg-5'>
                    <img className='photographer-div__pic' src={photographer} alt=''></img>
                </div>
                <div className='photographer-div__para col-lg-7'>
                    <h2 className='heading-tertiory about-headings'>
                        professional photographer
                    </h2>
                    <p>My team and I have been working since 2017 and have covered almost 120+ weddings.
                        We love to capture the moments of your big day in the best manner possible. We try to
                        bring life and thought to your pictures.
                    </p>
                    <p>Capturing, collecting and remembering sweet memories is everyone's dream..so friends 
                        we are here to make your wonderful memories more memorable.
                    </p>
                </div>
            </div>

            <hr className='hr-about'/>

            <div className='about-block row'>
                <div className='model-div__para col-lg-8'>
                    <h2 className='heading-tertiory about-headings'>model</h2>
                    <p>
                        I have organise 12 events as organiser.
                        Participanted in 15+ events as model.
                        <br/>
                        It feels very good combination of
                        giving poses for a camera and capturing poses with perfect angle of camera.
                    </p>
                </div>
                <div className='model-div col-lg-4'>
                    <img className='model-div__pic' src={model} alt=''></img>
                </div>
            </div>

            <hr className='hr-about'/>

            <div className='about-block row'>
                <div className='photographer-div col-lg-5'>
                    <img className='photographer-div__pic institute-pic' src={institute} alt=''></img>
                </div>
                <div className='photographer-div__para col-lg-7'>
                    <h2 className='heading-tertiory about-headings'>
                        attitude modeling institute
                    </h2>
                    <p>Attitude Molding Institute opened in Ahmednagar on  2016 and till now organizes 
                    national events, fashion week, dj night, dj dandiya night, kids fashion week done. 
                    I have organise 12 events as organiser. our make up partner is Swati Ghodke mam.<br/>
                    We grooms professional models.
                    </p>
                </div>
            </div>
            </div>
            
            {Footer()}
        </div>
        
    )
}


export default Aboutme;
