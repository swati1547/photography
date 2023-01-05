import React from 'react';
import Galleryblog from './components/Gallery-blog';
import Pricing from './components/Pricing';
import Mainpage from './components/Mainpage';
import Aboutme from './components/Aboutme'
import Wedding from './components/Wedding';
import Prewedding from './components/Pre-wedding';
import Maternity from './components/Maternity'
import Kids from './components/Kids'
import Celebrity from './components/Celebrity'
import Other from './components/Other'
import Fashion from './components/Fashion'
import {Route, Routes} from "react-router-dom";
import Videography from './components/Videography'
import Couplevideos from './components/Couplevideos'
import Cinematography from './components/Cinematography'

function App(){
    return(
        <Routes>
            <Route path='/' element={<Mainpage/>}></Route>
            <Route path='/about' element={<Aboutme/>}></Route>
            <Route path='/img-gallery' element={<Galleryblog/>}>
                <Route index element={<Wedding/>}/>
                <Route path='wedding' element={<Wedding/>}/>
                <Route path='pre-wedding' element={<Prewedding/>}/>
                <Route path='maternity' element={<Maternity/>}/>
                <Route path='kids' element={<Kids/>}/>
                <Route path='fashion' element={<Fashion/>}/>
                <Route path='celebrity' element={<Celebrity/>}/>
                <Route path='other' element={<Other/>}/>
            </Route>   
            <Route path='/pricing' element={<Pricing/>}></Route>
            <Route path='/videography' element={<Videography/>}>
                <Route index element={<Couplevideos/>}/>
                <Route path='couplevideos' element={<Couplevideos/>}/>
                <Route path='cinematography' element={<Cinematography/>}/>
            </Route>   
        </Routes>
)
}
    
export default App;