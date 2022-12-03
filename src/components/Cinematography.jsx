import React from 'react';
// import "../Stylefiles/Cinematography.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Cinematography(props){
    return(
        <div className='cinema'> 
            <div>
            <div className='c-video'>
                <h2 className='heading_secondary u-center-text u-margin-bottom-medium'>heading</h2>
                <p>Indian Wedding Films have evolved from long, traditional and blow-by-blow accounts of the wedding to highly customised and thematic feature films of your wedding the way it deserves to be remembered.</p>
                <p>Indian Wedding Films have evolved from long, traditional and blow-by-blow accounts of the wedding to highly customised and thematic feature films of your wedding the way it deserves to be remembered.</p>
            </div>
                <div className='cinema__card'>
                <iframe className='cinema__video' src="https://www.youtube.com/embed/_taLok5xYaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className='cinema__card-body'>
                    <h3 className='heading-tertiary u-margin-bottom-medium'>Cinematography</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo lectus tellus, et hendrerit leo convallis in. Suspendisse neque urna, sollicitudin vel fringilla a, cursus eu mauris. Integer euismod sit amet urna non luctu
                        </p>
                    </div>      
                </div>


                <div className='cinema__card'>
                
                    <div className='cinema__card-body'>
                    <h3 className='heading-tertiary u-margin-bottom-medium'>Cinematography</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo lectus tellus, et hendrerit leo convallis in. Suspendisse neque urna, sollicitudin vel fringilla a, cursus eu mauris. Integer euismod sit amet urna non luctu
                        </p>
                        
                    </div>   
                    <iframe className='cinema__video' src="https://www.youtube.com/embed/U_n3VNt2ipA" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                </div>
                </div>

        </div>
    )
}

export default Cinematography;