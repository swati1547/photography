import React from 'react';
// import "../Stylefiles/Aboutme.css";
import mainpic from '../images/pic20.jpg'
import photogrpahypic from '../images/pic21.jpg'
import Navbar1 from './Navbar1'

function Aboutme(){
    return(
        <div>
            <Navbar1/>
            <div className='about-background'>
                <div className='main-image'> 
                    <img src={mainpic}></img>
                </div>
            </div>
            <div className='about-block'>
                <div className='about-me'>
                    <h2 className='about-headings'>heyyy, nil garje here</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. It has survived not only five 
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It 
                    was popularised in the 1960s with the release of Letraset sheets</p>
                    <p>to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                    free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </div>

            <div className='about-block'>
                    <img className='' src={photogrpahypic}></img>
                    <div>
                    <h2 className='about-headings'>heyyy, nil garje here</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. It has survived not only five 
                    centuries, but also the leap into electronic 
                    </p>
                    <p>to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                    free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
            </div>

            <div className='about-block'>
                    <div>
                    <h2 className='about-headings'>heyyy, nil garje here</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. It has survived not only five 
                    centuries, but also the leap into electronic 
                    </p>
                    <p>to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                    free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                    <img className='' src={photogrpahypic}></img>
            </div>

            <div className='about-block'>
                    <img className='' src={photogrpahypic}></img>
                    <div>
                    <h2 className='about-headings'>heyyy, nil garje here</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. It has survived not only five 
                    centuries, but also the leap into electronic 
                    </p>
                    <p>to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                    free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
            </div>
            
        </div>
    )
}

export default Aboutme;
