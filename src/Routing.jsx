import React from 'react'

import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

import Services from './components/Services'
import Aboutus from './components/Aboutus'


const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>

    <Routes>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Aboutus' element={<Aboutus/>}/>
        

        
    


    </Routes>
         


    <Footer/>
    
    
    
    </BrowserRouter>




  )
}

export default Routing