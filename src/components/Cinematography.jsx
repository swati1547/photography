import React from 'react';

function Cinematography(props){
    return(
        <div className='cinema'> 
            <div>

                <div className='cinema__card row'>
                    <iframe className='col-lg-6 cinema__video' src="https://www.youtube.com/embed/_taLok5xYaQ" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>

                    <div className='col-lg-6 cinema__card-body'>
                    <h3 className='cinema__heading'>Lakh Lakh Chanderi</h3>
                        <p>
                        Still Photography : Nil Garje <br/>
                        Production : Vibrant communication Ashwini Jadhav <br/>
                        Direction : Swati Ghodke <br/>
                        Cinematographer : Ashish Gulve <br/>
                        Makeup and stying : Be.You.Tiful By Swati Ghodke <br/>
                        Hairstyle : Mona Bharne<br/>
                        Styling assist : Aboli Marne<br/>
                        Nath : Tantuh <br/>
                        Clothing Partner : NirutiEthnicStudio <br/>
                        Jewellery Partner : 
                        Pawaskar Jewellers, Rups Beauty Studio
                        </p>
                    </div>      
                </div>

                <hr className='hr'/>
{/* 
                <div className='cinema__card row'>
                    <div className='col-lg-6 cinema__card-body'>
                        <h3 className='cinema__heading'>Cinematography</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo lectus tellus, et hendrerit leo convallis in. Suspendisse neque urna, sollicitudin vel fringilla a, cursus eu mauris. Integer euismod sit amet urna non luctu
                        </p>
                    </div>   

                    <iframe className='col-lg-6 cinema__video' src="https://www.youtube.com/embed/U_n3VNt2ipA" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>   
                </div> */}


                </div>

        </div>
    )
}

export default Cinematography;